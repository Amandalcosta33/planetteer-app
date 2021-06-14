import { DateTime, Duration } from 'luxon';

export enum FORMATO {
  DATA_HORA_PADRAO = 'dd/MM/yyyy HH:mm',
  DATA_HORA_PADRAO_2 = 'dd/MM/yyyy HH:mm:ss',
  DATA_HORA_ZONA_URL_1 = 'yyyy-MM-dd\'T\'HH:mm:ss',
  DATA_HORA_ZONA_URL_2 = 'yyyy-MM-dd\'T\'HH:mm:ssZ',
  DATA_HORA_ZONA_URL_3 = 'yyyy-MM-dd\'T\'HH:mm:ss.S',
  DATA_HORA_ZONA_URL_4 = 'yyyy-MM-dd\'T\'HH:mm:ss.SZ',
  DATA_HORA_URL_0 = 'yyyy-MM-dd HH:mm',
  DATA_HORA_URL_1 = 'YYYY-MM-DD HH:mm:ss',
  DATA_HORA_URL_2 = 'YYYY-MM-DD HH:mm:ssZ',
  DATA_HORA_URL_3 = 'YYYY-MM-DD HH:mm:ss.S',
  DATA_HORA_URL_4 = 'YYYY-MM-DD HH:mm:ss.SZ',
  DATA_HORA_REALM = 'yyyy-MM-dd@HH:mm:ss',
  DATA_HORA_ARQUIVO = 'yyyy-MM-dd-HH-mm',
  DATA_URL = 'yyyy-MM-dd',
  DATA_HORA_URL = 'yyyy-MM-dd HH:mm:ss',
  DATA_PADRAO = 'dd/MM/yyyy',
  HORA_PADRAO = 'HH:mm'
}

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Doming'];
const meses = ['JAN','FEV','MAR','ABR','MAIO','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

export type ParametroData = DateTime | Date | string | number;

export class DataUtil {

  static dataComHora(data: ParametroData, hora: string): DateTime {
  const dataString = DataUtil.toString(data, FORMATO.DATA_PADRAO);
    return DataUtil.dataHoraToDateTime(dataString, hora);
  }

  static dataHoraToDateTime(data: string, hora: string): DateTime {
    return DataUtil.toDateTime(`${data} ${hora}`);
  }

  static dataHoraMinutoToDateTime(data: string, hora: number, minuto: number): DateTime {
    const horaMinuto = ('0' + hora).slice(-2) + ':' + ('0' + minuto).slice(-2);
    return DataUtil.toDateTime(`${data} ${horaMinuto}`);
  }

  static getIntervaloHoras(inicio?: DateTime, fim?: DateTime): Duration | undefined {

    if (inicio && fim) {
      return fim.diff(inicio);
    }

    return undefined;

  }

  static getMes(index: number) {
    return meses[index-1];
  }

  static getMesAno(data: ParametroData) {
    const dateTime = DataUtil.toDateTime(data);
    const mes = DataUtil.getMes(dateTime.month);
    return `${mes}/${dateTime.year}`;
  }

  static getDiaSemana(data: ParametroData): string {

    const dateTime: DateTime = this.toDateTime(data);

    if (dateTime) {
      return diasSemana[dateTime.weekday-1];
    } else {
      return '-';
    }

  }

  static toDateTime(data: ParametroData): DateTime {

    let dateTime: DateTime;

    if (data instanceof DateTime) {
      dateTime = data;
    } else if (data instanceof Date) {
      dateTime = DateTime.fromJSDate(data);
    } else if (typeof data === 'number') {
      dateTime = DateTime.fromMillis(data);
    } else {

      for (let formato in FORMATO) {

        // @ts-ignore
        dateTime = DateTime.fromFormat(data, FORMATO[formato]);

        if (dateTime && dateTime.isValid) {
          break;
        }
      }

      if (!dateTime || !dateTime.isValid) {
        console.error(`Formato inválido. ${data}`);
        throw new Error(`Formato inválido. ${data}`);
      }
    }

    return dateTime;
  }

  static toJSDate(data: ParametroData): Date {

    let dateTime: DateTime;

    if (data instanceof DateTime) {
      dateTime = data;
    } else {
      dateTime = DataUtil.toDateTime(data);
    }

    return dateTime.toJSDate();
  }

  static toString(data: ParametroData, formato = FORMATO.DATA_HORA_PADRAO): string {

    let dateTime: DateTime;

    if (data instanceof DateTime) {
      dateTime = data;
    } else {
      dateTime = DataUtil.toDateTime(data);
    }

    return dateTime.toFormat(formato);
  }

  static toISO(data: ParametroData): string {

    let dateTime: DateTime;

    if (data instanceof DateTime) {
      dateTime = data;
    } else {
      dateTime = DataUtil.toDateTime(data);
    }

    return dateTime.toISO();
  }

  static fromISO(data: string | undefined): DateTime | undefined {

    if (!data) {
      return undefined;
    }

    const dateTime = DateTime.fromISO(data);
    return (dateTime.isValid) ? dateTime : undefined;
  }

  static agruparPorDia(datas: DateTime[]): Map<string, DateTime[]> {

    let resultado = new Map<string, DateTime[]>();

    if (datas.length > 0) {

      let diaMesAno: string;
      let agrupamento: DateTime[] | undefined;

      for (let data of datas) {

        diaMesAno = DataUtil.toString(data, FORMATO.DATA_PADRAO);
        agrupamento = resultado.get(diaMesAno);

        if (!agrupamento || !agrupamento.length) {
          agrupamento = [];
        }

        agrupamento.push(data);
        resultado.set(diaMesAno, agrupamento);
      }
    }

    return resultado;

  }

}

import { isEmptyString, toNumber } from './string-util';

export function isNumber(valor: any): boolean {
    if (valor !== 0 && !valor) {
        return false;
    } else {
        return !!Number(valor) || Number(valor) === 0;
    }
}

export function isNotNullNumber(valor: string | number) {
    if (valor !== 0 && !valor) {
        return false;
    } else if (typeof valor === 'string' && isEmptyString(valor)) {
        return false;
    } else {
        return !!Number(valor) || Number(valor) === 0;
    }
}

export function safeFixed(valor: number | string, precisao: number): string {

    if (isNotNullNumber(valor)) {

        let numero: number;

        if (typeof valor === 'string') {
            numero = toNumber(valor)!;
        } else {
            numero = valor;
        }

        return numero.toFixed(precisao);
    } else {
        return '';
    }
}


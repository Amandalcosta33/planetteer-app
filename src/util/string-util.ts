import {isNumber} from "./number-util";

export const CPF_REGEX = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const URL_REGEX = /^((http|https):\/\/)/;
export const FILE_REGEX = /^\\(.+\\)*(.+)\.(.+)$/;

export function equalsIgnoreCase(a: string, b: string) {
  return a.toUpperCase() === b.toUpperCase();
}

export function includesIgnoreCase(lista: string[], valor?: string): boolean {

  if (!valor) {
    return false;
  }

  for (let s in lista) {
    if (equalsIgnoreCase(s, valor)) {
      return true;
    }
  }

  return false;
}

export function trimEllip(text: string, length: number) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

export function numberToString(valor?: number) {
  return isNumber(valor) ? String(valor) : '';
}

export function isValidNumber(valor: string): boolean {

  if (valor) {
    const match = valor.match(/^[0-9]+[,.]?[0-9]*/g);
    return !!match && valor === match[0];
  }

  return true;
}

export function toNumber(valor?: string) {

  if (valor) {
    valor = valor.replace(',', '.');
  }

  return (valor) ? Number(valor) : null;
}

export function isEmptyString(str?: string | null) {
  return (!str || 0 === str.length || !str.trim());
}

export function concat(concat: string, to?: string | null): string {
  if (isEmptyString(to)) {
    return concat;
  } else {
    return to + concat;
  }
}

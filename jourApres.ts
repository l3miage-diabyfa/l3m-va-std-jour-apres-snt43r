export type DATE = readonly [jour: number, mois: number, année: number];

/**
 * Renvoie le jour suivant d
 * Si d est invalide, lèvee une exception "date invalide".
 * Attention : Ne pas modifier le paramètre d dans la signature de la fonction.
 */
export function jourAprès(d: DATE): DATE {
  const [j, m, a] = d;
  throw "date invalide";
}

import {
  anton,
  bebas_neue,
  montserrat_alternates,
  open_sans,
  orbitron,
  poppins,
  roboto,
  vt323
} from "@/fonts/fonts";

export const getFontClassName = (font?: string) => {
  switch (font) {
    case 'roboto':
      return roboto.className;
    case 'poppins':
      return poppins.className;
    case 'open_sans':
      return open_sans.className;
    case 'vt323':
      return vt323.className;
    case 'anton':
      return anton.className;
    case 'bebas_neue':
      return bebas_neue.className;
    case 'orbitron':
      return orbitron.className;
    case 'montserrat_alternates':
      return montserrat_alternates.className;
    default:
      return 'Arial';
  }
};
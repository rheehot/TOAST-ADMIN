import { canUseDOM } from '../pages/_app';

export const getCookie = (value) => {
  if (canUseDOM()) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieList = decodedCookie.split(';');
    const name = value + '=';
    const cookie = cookieList
      .map((e) => e.trim())
      .find((e) => e.indexOf(name) === 0);
      
    return cookie
        ? cookie.substring(name.length)
        : '';
  }
}
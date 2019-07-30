/**
 * Get parameters from a query string 
 * 
 * @param searchstring The query string to return the parameters of
 * */

export const queryStringParams = (searchstring: string): any => {
  let output: any = {};
  let querystring = searchstring.slice(1);
  querystring = querystring.split('#')[0];
  const params = querystring.split('&');
  for (let param of params) {
    const thing = param.split('=');
    output[thing[0]] = thing[1];
  }
  return output;
}
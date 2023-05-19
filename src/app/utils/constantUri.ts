const baseUrl= 'https://api.themoviedb.org/3'; 
export class ConstantUri {
    public static readonly apikey = '9a100dac3eb94639f86b4d38f74c58db';
    public static readonly  validateWithLogin = baseUrl +'/authentication/token/validate_with_login';
    public static readonly tokenNew = baseUrl + "/authentication/token/new";
    public static readonly PopularMovie = baseUrl + '/movie/popular';
}
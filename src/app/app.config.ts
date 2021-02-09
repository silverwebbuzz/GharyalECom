import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	appName: string;
	categoryImageURL: string;
	productImageURL: string;
	mediaURL: string;
	apiBase: string;
	perPage: number;
	consumerKey: string;
	consumerSecret: string;
	adminAccessToken: string;
	adminAccessTokenSecret: string;
	dfImage:string;
	
}

export const BaseAppConfig: AppConfig = {
	appName: "Gharyal Ecommerce",
	categoryImageURL: 'http://gharyal.com/pub/media/catalog/category/',
	productImageURL: 'http://gharyal.com/pub/media/catalog/product',
	mediaURL: 'http://gharyal.com/pub/media/',
	apiBase: "http://gharyal.com/index.php/rest/",
	perPage: 30,
	consumerKey: "mbiqnxywlx5p7b0w82s1dwmk7x8v27kh",
	consumerSecret: "boaj6b1jq3oaq2at1md14941vf7hd8fv",
    adminAccessToken: "pk2bl6nx0cvqnvotimbzpjfb88p5kosf",
	adminAccessTokenSecret: "ipyhebd48sqxlepjqqxp1jrwdw8gfetr",
	dfImage: '../asssets/img/no-image-icon-4.png'
    
};
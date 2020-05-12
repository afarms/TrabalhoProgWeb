/*forma mais simplificada de exportar uma casse usando penas o constructor*/
export class User{
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string){}
}
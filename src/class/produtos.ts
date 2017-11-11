import { Adicional } from "./Adicionais";

export class Produto{
	id:number;
	nome: string;
	url: string;
	valor: number;
	descricao: string;
	tipo:number;
	adicional: Adicional[];
}

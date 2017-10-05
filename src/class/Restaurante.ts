export class Restaurante {
	nome: string;
	email: string;
	endereco: string;
	telefone: string;
	cnpj: number;
}

export class Mesa {
	numero: number; // identificação da mesa pelo usuario
	codigo: number; // metodo 1 de achar a mesa no banco de dados
	qrcode: string; // metodo 2 de achar a mesa no banco de dados
	restaurante: number; // relativo a qual restaurante
}

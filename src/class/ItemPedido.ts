import { Produto } from "./produtos";

export class ItemPedido{
  id: number;
  produto: Produto;
  valor: number;
  obs: string;
  status: number;
  respostaCozinha: String;
}

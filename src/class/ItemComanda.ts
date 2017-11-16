import { ItemPedido } from "./ItemPedido";
import { Mesa } from "./Restaurante";

export class Comanda{
  id: number;
  pedido: Array<ItemPedido>;
  mesa: Mesa;
}
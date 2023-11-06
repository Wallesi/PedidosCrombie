import { parseCookies } from "nookies";
import axios from "axios";

type DataBody = {
  clientId: string;
  restaurantId: string;
};

type Eatable = {
  idEatable: string;
  title: string;
  description: string;
  photo: string;
  price: number;
  name: string;
  menuType: string;
  quantity?: number;
};

type typeStatus = 
  | 'WAITING'      // Gris oscuro - Esperando
  | 'SEND'         // Gris claro - Cliente envió el pedido
  | 'CANCELLED'   // Rojo - Local lo rechazó
  | 'ACCEPTED'    // Amarillo - Local lo aceptó
  | 'COOKED'      // Verde clarito - Local ya lo cocinó
  | 'READY'       // Verde medio - Asignado para entrega
  | 'ONITSWAY'    // Verde oscuro - En camino
  | 'RECEIVED';   // Fucsia - Llegó a destino

export const updateOrderStatus = async (id: string, statusValue: typeStatus) => {

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.patch(
      `https://pedidos-crombie-production.up.railway.app/orders/${id}/status`,
      {status: statusValue},
      {
        headers: config.headers,
      }
    );
    if (response.status === 200) {
      console.log(statusValue);
      
      return statusValue; 
    }
  } catch (error: any) {
    console.error("Error al obtener la dirección:", error.message);
    throw error;
  }
};

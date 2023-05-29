import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timestamp } from "firebase/firestore/lite";
import dayjs, { Dayjs } from "dayjs";

interface ReservationState {
  ticket_type: number;
  amount_ticket: number;
  ticket_used_date: Dayjs;
  customer_info: string;
  phone_number: number;
  customer_email: string;
}

// interface ReservationState {
//   value: Reservation[];
// }

const initialState: ReservationState = {
  ticket_type: 0,
  amount_ticket: 0,
  ticket_used_date: dayjs("00/00/0000", "DD/MM/YYYY"),
  customer_info: "",
  phone_number: 1236789,
  customer_email: "",
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    updateTicketType: (state, action: PayloadAction<number>) => {
      state.ticket_type = action.payload;
    },
    updateAmountTicket: (state, action: PayloadAction<number>) => {
      state.amount_ticket = action.payload;
    },
    updateTicketUsedDate: (state, action: PayloadAction<Dayjs>) => {
      state.ticket_used_date = action.payload;
    },
    updateCustomerInfo: (state, action: PayloadAction<string>) => {
      state.customer_info = action.payload;
    },
    updatePhoneNumber: (state, action: PayloadAction<number>) => {
      state.phone_number = action.payload;
    },
    updateCustomerEmail: (state, action: PayloadAction<string>) => {
      state.customer_email = action.payload;
    },
  },
});

// export const { addReservation } = reservationsSlice.actions;
export const {
  updateTicketType,
  updateAmountTicket,
  updateCustomerEmail,
  updateCustomerInfo,
  updatePhoneNumber,
  updateTicketUsedDate,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;

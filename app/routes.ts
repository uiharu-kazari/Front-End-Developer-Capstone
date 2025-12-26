import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("booking", "routes/booking.tsx"),
  route("booking/confirmed", "routes/booking-confirmed.tsx"),
  route("about", "routes/about.tsx"),
  route("menu", "routes/menu.tsx"),
  route("order", "routes/order.tsx"),
  route("login", "routes/login.tsx"),
] satisfies RouteConfig;

import { io } from "socket.io-client";

const socket = io("http://wunder-provider.herokuapp.com/");

socket.on("connect", () => {
  console.log(socket.id);
});

getData();
{
  socket.emit("results", (data) => {
    console.log(data);
    return data.results[0];
  });
}

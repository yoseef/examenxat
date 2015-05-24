module.exports = function(http) {
  var io = require("socket.io")(http); //sockect.io necessita http per funcionar
  return {
    updatee : function(){
      io.emit('updateFucker');
    },
    nouLlibre: function() {
      console.log('new book event!')
      io.emit('newBook');

    },
    editatLlibre: function() {
      io.emit('editedBook');
    },
    eliminatLlibre: function() {
      io.emit('deletedBook');
    }
  }
};
//
//
// io.on('connection', function(socket) {
//   socket.on('disconnect', function() {
//     /*
//         Quan es disconnecta un usuario.
//         del xat, l'esborrem de la
//         variable usuaris i avisem
//         a la resta d'usuaris del xat
//     */
//     io.emit('message', {
//       codi: 0,
//       user: usuaris[socket.id],
//       missatge: " ha marxat!"
//     });
//     delete usuaris[socket.id];
//     io.emit('usuaris', usuaris);
//   });
//   socket.on('disconnectUser', function() {
//     /*
//         Quan es disconnecta un usuari
//         del xat, l'esborrem de la
//         variable usuaris i avisem
//         a la resta d'usuaris del xat
//     */
//     io.emit('message', {
//       codi: 0,
//       user: usuaris[socket.id],
//       missatge: " ha marxat!"
//     });
//     delete usuaris[socket.id];
//     io.emit('usuaris', usuaris);
//     socket.emit('UserDesconected');
//   });
//   socket.on('newUser', function(msg) {
//     /* Quan s'incorpora un nou usuari al xat
//         l'afegim a la variable usuaris
//         i enviem un missatge a la resta
//         d'usuaris avisam que hi ha un nou
//         usuari
//     */
//     var repetit = false;
//     for (var x in usuaris) {
//       if (usuaris[x] == msg.user) repetit = true;
//     }
//
//     if (!repetit) {
//       usuaris[socket.id] = msg.user;
//       socket.emit('newUserok');
//       io.emit('usuaris', usuaris);
//       io.emit('message', {
//         codi: 0,
//         user: msg.user,
//         missatge: " s'ha afegit al xat!"
//       });
//     } else {
//       socket.emit('newUserError');
//     }
//     // if (usuaris[i] != msg.user) {
//     //   usuaris[socket.id] = msg.user;
//     //   console.log(msg.user);
//     //   socket.emit('newUser', 'ok');
//     //   io.emit('message', msg.user + " s'ha afegit al xat");
//     // } else {
//     //   socket.emit('newUserError');
//     // }
//
//
//   });
//
//   socket.on('message', function(msg) {
//     // Quan un usuari envia un missatge l'enviem a la resta de usuaris en el xat
//     io.emit('message', msg);
//   });
//
//   socket.on('getUsuaris', function() {
//     socket.emit('usuaris', usuaris);
//   });
//
// });

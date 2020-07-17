# Websockets

from https://www.ably.io/concepts/websockets

what are websockets?

'full duplex' connection over the internet (bidirectional)


websockets are a transport layer sits directly on top of TCP/IP
starts with an HTTP handshake, then an Upgrade header (from client to server) - requesting to upgrade to websockets
websocket urls use ws: protocol or wss: protocol for secure transmission
if server completes handshake the http connection is replaced with a ws connection using the same underlying tcp/ip connection.

protocol mechanism:

designed mostly it seems to ensure that a transport upgrade to websockets is done on purpose by the server (i.e. the server understands that it is creating a websocket connection) or possibly does cache busting - but not a real security feature.

client sends a Sec-Websocket-Key header - unique value created by client,
server mush hash (SHA-1) it with a known GUID then base64 encode it and send it back in a Sec-Websocket-Accept header.
This confirms to the client that this connection 

now either side can send data without handshake overhead - frame based messaging. client notified of message once all frames are received. each frame prefixed with 4-12 bytes of metadata about payload.



broadcasting - remember client ids? - socket.io hides that away for you

what about managing clean downgrades - for clients that don't support websockets? - use long polling or flash - socket.io hides that away too

socket.io has rooms and namespaces allowing for limited broadcasting to groups of users

socket.io IS NOT a websocket implementation though - it just uses websockets sometimes - it adds metadata to the packets, so webosckets can't connect to socket.io and vice versa.


complexities around websockets:

large server infrastructure - maintaining lots of TCP/IP connections - what about failure scenarios - server going down - LOTS and LOTS of client reconnections all at once needed

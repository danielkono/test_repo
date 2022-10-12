function FindProxyForURL (url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  // if (shExpMatch(host, '*.relution.xyz')) {
  //  return 'DIRECT';
  // }

  //if (shExpMatch(host, '*.mwaysolutions.com')) {
  //  return 'PROXY 10.21.5.55:8888';
  //}
//
  //// URLs within this network are accessed through
  //// port 8080 on fastproxy.example.com:
  //if (isInNet(host, '10.20.0.0', '255.255.248.0')) {
  //  return 'PROXY fastproxy.example.com:8080';
  //}
//
  //// All other requests go through port 8080 of proxy.example.com.
  //// should that fail to respond, go directly to the WWW:
  return 'PROXY 192.168.178.22:9090; DIRECT';
}

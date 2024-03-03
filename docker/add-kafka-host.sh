echo '::1             kafka-server' | sudo tee -a /etc/hosts
sudo killall -HUP mDNSResponder

Um einen SSH Server auf der VM aufzusetzten einmal

sudo apt install openssh-server

systemctl enable ssh

systemctl start ssh

Puplic Key Auth:

**Partner: Filip Orlovic**

Er hat auf dem Pfad:

**~/.ssh/authorized_keys**

modifiziert mit 

**chmod 700 ~/.ssh**
**chmod 600 ~/.ssh/authorized_keys**

meinen Puplic key eingetragen der mit:

**sssh-keygen -t rsa -b 4096 -C "du@example.com"**

auf meiner VM genertiert worden ist.

Mein Key kann mit dem Command:

**cat ~/.ssh/id_rsa.pub**

geöffnet werden.

Sobald er die Daten eingespeichert hat konnte ich mich mit SSH ohne Passwort verbinden.

The End





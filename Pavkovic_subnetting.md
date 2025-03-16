Benutzte Tools: https://chatgpt.com/, https://de.wikipedia.org/wiki/Netzmaske

# Übung Subnetting

## Übung 1

Bilde aus dem Netz 192.168.0.0 /24 4 Subnetze. Netze mit Mindestzahl an nutzbaren
Host aber nicht darunter wählen:
Netz a mit 20,
Netz b mit 15,
Netz c mit 30, und das
Netz d mit den Rest Anteil der Netzwerkadressen.

**Antwort**

| Netz | Subnetzmaske| Netz             | Broadcast         | Hosts                     |
|------|-------------|------------------|-------------------|---------------------------------|
| A    | /27         | 192.168.0.0      | 192.168.0.31      | 192.168.0.1 - 192.168.0.30     |
| B    | /27         | 192.168.0.32     | 192.168.0.63      | 192.168.0.33 - 192.168.0.62    |
| C    | /27         | 192.168.0.64     | 192.168.0.95      | 192.168.0.65 - 192.168.0.94    |
| D    | /25         | 192.168.0.128    | 192.168.0.255     | 192.168.0.129 - 192.168.0.254  |

## Übung 2

Teile das Netz 193.170.20.0 /24 in 8 gleich große Netze! Erstelle eine Tabelle mit folgenden Angaben:
Netzwerkadresse,               nutzbare Hosts,                    Broadcastadresse,              Subnetzmaske.

**Antwort**

| Netz            | Hosts                           | Broadcast        | Subnetzmaske          |
|-----------------|---------------------------------|------------------|-----------------------|
| 193.170.20.0    | 193.170.20.1 - 193.170.20.30    | 193.170.20.31    | 255.255.255.224 (/27) |
| 193.170.20.32   | 193.170.20.33 - 193.170.20.62   | 193.170.20.63    | 255.255.255.224 (/27) |
| 193.170.20.64   | 193.170.20.65 - 193.170.20.94   | 193.170.20.95    | 255.255.255.224 (/27) |
| 193.170.20.96   | 193.170.20.97 - 193.170.20.126  | 193.170.20.127   | 255.255.255.224 (/27) |
| 193.170.20.128  | 193.170.20.129 - 193.170.20.158 | 193.170.20.159   | 255.255.255.224 (/27) |
| 193.170.20.160  | 193.170.20.161 - 193.170.20.190 | 193.170.20.191   | 255.255.255.224 (/27) |
| 193.170.20.192  | 193.170.20.193 - 193.170.20.222 | 193.170.20.223   | 255.255.255.224 (/27) |
| 193.170.20.224  | 193.170.20.225 - 193.170.20.254 | 193.170.20.255   | 255.255.255.224 (/27) |

## Übung 3

172.28.40.0 /26 Teile wie folgt auf: 2 Netze!
Erstelle eine Tabelle mit folgenden Angaben:
Netzwerkadresse,               nutzbare Hosts,                    Broadcastadresse,              Subnetzmaske.

**Antwort**

|-----------------------------|-----------------------------------|------------------------------|----------------------|
| 172.28.40.0                 | 172.28.40.1 - 172.28.40.30        | 172.28.40.31                 | 255.255.255.224 (/27) |
| 172.28.40.32                | 172.28.40.33 - 172.28.40.62       | 172.28.40.63                 | 255.255.255.224 (/27) |

## Übung 4

Wie lautet die Subnetzmaske bei der Netzadresse: 17.0.0.0 mit 10 verwendbaren Subnetzen, sowie mit mindestens 12 Hosts je Subnetz?
Antwort in Sätzen, wie sie zu dieser Lösung kommen; und erstelle eine Tabelle:

**Antwort**

Ich würde nicht nutzbare addresse vom ganzen netz sind 20 (broadcast/netz) dann wir brauchen ja 10 netze mit 12 als 120 addressen full und dann rechnen wir nur hoch. Wir nutzen /28 zum teilen also 14 pro netz 1-14, 17-30....

| Netz           | Hosts                    | Broadcast       |
|----------------|--------------------------|-----------------|
| 17.0.0.0       | 17.0.0.1 - 17.0.0.14     | 17.0.0.15       |
| 17.0.0.16      | 17.0.0.17 - 17.0.0.30    | 17.0.0.31       |
| 17.0.0.32      | 17.0.0.33 - 17.0.0.46    | 17.0.0.47       |
| 17.0.0.48      | 17.0.0.49 - 17.0.0.62    | 17.0.0.63       |
| 17.0.0.64      | 17.0.0.65 - 17.0.0.78    | 17.0.0.79       |
| 17.0.0.80      | 17.0.0.81 - 17.0.0.94    | 17.0.0.95       |
| 17.0.0.96      | 17.0.0.97 - 17.0.0.110   | 17.0.0.111      |
| 17.0.0.112     | 17.0.0.113 - 17.0.0.126  | 17.0.0.127      |
| 17.0.0.128     | 17.0.0.129 - 17.0.0.142  | 17.0.0.143      |
| 17.0.0.144     | 17.0.0.145 - 17.0.0.158  | 17.0.0.159      |

## Übung 5

Bestimmen Sie die Subnetmaske mit folgenden Angaben:

Netzadresse: 210.52.190.0
Subnetze: Anzahl 5
Mindestanzahl von Hosts je Subnetz: 10

**Antwort**

für 10 Hosts wären next Netz 14 hosts also ein /28 notwenidig der 5 mal in einem netz vorhanden sein muss das nächst höhere Netz was die 5 subnetzs beinhalten kann wäre ein /25 Netz

| Netz           | Hosts                          | Broadcast  |
|----------------|--------------------------------|-------------------|
| 210.52.190.0   | 210.52.190.1 - 210.52.190.14   | 210.52.190.15   |
| 210.52.190.16  | 210.52.190.17 - 210.52.190.30  | 210.52.190.31   |
| 210.52.190.32  | 210.52.190.33 - 210.52.190.46  | 210.52.190.47   |
| 210.52.190.48  | 210.52.190.49 - 210.52.190.62  | 210.52.190.63   |
| 210.52.190.64  | 210.52.190.65 - 210.52.190.78  | 210.52.190.79   |

## Übung 6

Teile  ein /30 Netz auf!    Wozu werden diese /30 Netze am häufigsten verwendet?
Antwort:

**Antwort**

Die 30 Netzwerke lassen nur 2 Hosts zu und werden meistens zwischen 2 Routern oder einfachen netzverbindungen genutzt da es kein platz für weitere Adressen hat. Kann man auch als Direktverbindung zweier Geräte sehen. 

## Übung 7

Nennen Sie den jeweiligen Netz- und Hostanteil der Klassen A, B und C


**Antwort**

| Klasse | Netzwerkanteil         | Hostanteil            | Standard-Subnetzmaske | Maximale Hosts pro Netz |
|--------|------------------------|-----------------------|-----------------------|-------------------------|
| A      | 8 Bit (1 Oktett)       | 24 Bit (3 Oktette)    | 255.0.0.0 (/8)        | 16.777.214              |
| B      | 16 Bit (2 Oktette)     | 16 Bit (2 Oktette)    | 255.255.0.0 (/16)     | 65.534                  |
| C      | 24 Bit (3 Oktette)     | 8 Bit (1 Oktett)      | 255.255.255.0 (/24)   | 254                     |

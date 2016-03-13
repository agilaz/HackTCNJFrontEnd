# HackTCNJFrontEnd
Hack TCNJ 2016 project by Edward Kennedy, Alex Cretella, Handell Desulme, George Keenan, and Isaac M. Currently [live](https://nothingsimpawsible.herokuapp.com/), but incomplete.

Adds additional search options to TCNJ's Paws system, specifically to allow the ability to search for classes that meet multiple liberal learning requirements.

The backend utility (most recent version: [HackTCNJBackEnd](https://github.com/agilaz/HackTCNJBackEnd)) is a chrome extension that allows the user to grab information on all liberal learning courses, and a separate script to send this information to mongodb (currently hosted on linode). This data is sent to the client on every search request.
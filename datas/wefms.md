##  What is WEFMS ? 
WEFMS stands for Wireless Engine Fuel Monitoring System. The motto of the project is to monitor the Engines that are present remotely anywhere with a website. This project contains two major part. 

 - Hardware part
	 - Device to read data from engine.
	 - Microcontroller to transmit data to the server.
 - Software part
	 - Website that can show data as well as turn on and turn off the engine.
     
## How we made WEFMS 
#### Engine side:
We already had the device that reads data from the engine. So we were supposed to do the website and do the data transmission part. We chose Raspberry pi zero since it was cheap and effective. We git inputs in form of 5v and 0v so we used the GPIO pins in the RPI to collect the data at regular intervals and transmit it to the database. We had opened port 22 (SSH) of our server so that we could establish a ssh connection and write into the mysql database present in there. We did not opt for any hosting services since we were sponsored with an IIS server in the college. We had to buy the domain and configure it alone.

#### website side: 
For POC we had chosen PHP for developing the website. We made a dashboard that shows the data collected from the engine and added a feature that allows the user to turn on or turn off the generator. The website allows the user to export the data collected from the engine for further analysis. we also stored the historical data and had analytics in the site. The site was made responsive for all devices using bootstrap. We also had multiple permission levels such as admin, user, fuel filler.

Admin is allowed to turn off and turn on generator and has all access.
Normal user will only be able to see the fuel level and whether or not the engine is on or off.
Fuel filler login will have an form that he has to submit when the engine fuel is refilled and it will be shown in the admin side.

Thus we had data to analyse how much fuel was filled and if the fuel was filled really or not.

## Uses
This project was done monitoring the generators that are present in remote telephone towers all across India. These generators are not accessible easily so one has to travel a long distance to check the fuel status. What if the generators run out of fuel when it is running ? It will result in Airlock that has to be fixed by the mechanic until then the generator wont work. Till now mechanics are manually allocated for refilling the fuels in such generators. So this project will allow the authorised persons to monitor the level of fuel in the generators remotely thereby reducing manual labour.

Site: www.wefms.com
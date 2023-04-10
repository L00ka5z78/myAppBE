Witam serdecznie oceniającego ten projekt.

Na początku kilka słów o mnie.
Praca zawodowa pozwala mi na nauke i pisanie projektów w 2 tygodniowych interwałach, gdyż
pracuję w rotacji 12 dni pracy na 10 dni wolnego. W dniach wolnych od pracy mogłem 
poświęcić na pisanie projektu naprawdę dużo czasu i tak też było. Niestety podczas
dni roboczych, rzadko zdarzało się abym pisał coś sensownego.
Projekt napisałem już jakiś czas temu, w okresie kiedy miałem mnóstwo wolnego czasu.
Jest to prosta Todo lista, z podstawowym CRUD'em i rejestracją- logowaniem.
Tak naprawdę nic nadzwyczajnego, aczkolwiek pochłonęło duża ilość czasu.


Projekt początkowo miał być napisany w JS, w któym swobodniej sie czuję, a wersja TypeScript
miała powstać o ile czas mi na to pozwoli. Okazało się, że nie było tak źle i wersja TS
jest na branchu newDevelop. Wersja Backendowa działa, choć kod pozostaje co nieco do życzenia.
Wersja Frontend, jest nie dopracowana.
Sam projekt miał być prosty, z tego względu, że chciałem uniknąć sytuacji, że go nie doręczę 
na czas.


Kilka słów o projekcie i rzeczach które uważam, że wymagają poprawy. 
Frontend - obsługa formularza. Użyłem, kilku useState() z wymaganymi danymi,
zamiast użyć jednego i wrzucić do środka dane w formie obiektu. Jestem świadomy,
że nie do końca jest to prawidłowe, powodem dla któego tak jest, było, to iż
nie potrafiłem poradzić sobie z aktualizacją formularza, a chciałem zawrzeć wszystkie
operacje z CRUD'a. Problemem było, to że formularz po kliknięciu aktualizuj, nie wypełniał się
danymi które miały być zaktualizowane.(wyświetlało pusty formularz)

Nie użyłem react-app-rewired, ponieważ nie wiedziałem jak tego dobrze użyć z mongoDB.
To znaczy, co zrobić z: createdAt, updatedAt i _id, czy je przekazywać na Frontend czy 
jest to niepotrzebne. Ponieważ aplikacja jest tak naprawdę prosta, zdecydowałem się odpuścić
react-app-rewired.

Ogólnie jestem w miare zadowolony z efektu końcowego, aczkolwiek gdybym zaczynał pisać ten
projekt w dniu dzisiejszym, to zrobiłbym to inaczej, a to dlatego, że podciągnąłem 
trochę swoje umiejętności w TS i React. 

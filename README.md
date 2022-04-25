# Domácí úkol: Zvířátka

Za úkol máš vyrobit aplikaci, která zobrazuje seznam zvířátek v ZOO. Když klikneš na zvířátko v seznamu, zobrazí se vpravo jeho detailní popis.

Tentokrát není zadání postup krok za krokem, na poustu věcí si musíš přijít sama.

- [Fork zadání na GitHubu](#fork-zadání-na-githubu)

![ukázka výsledku](ukazka-vysledku.jpg)


## Fork zadání na GitHubu

Tentokrát **nebudeš** vytvářet aplikaci úplně od začátku pomocí `create-czechitas-app`, ale postupuj následovně:

1. Předpokládáme, že máš účet na GitHubu. Pokud ne, zaregistruj si ho a přihlaš se do něj.
2. Udělej si fork tohoto repozitáře se zadáním (tím se ti úkol zkopíruje do tvého GitHub účtu).
3. Naklonuj si repozitář ze svého GitHub účtu k sobě na disk.
4. Až budeš mít úkol hotový (viz. dále), tak nezapomeň udělat commit a push zpět na GitHub.
5. Úkol budeš odevzdávat jako odkaz na GitHub se svým zpracovaným řešením.

Pokud nevíš, jak s Gitem a GitHubem pracovat, zeptej se nás na Slacku nebo se prosím podívej na následující videa. Jsou z jiného kurzu, ale vše platí i pro náš kurz:

* [Úvod do Gitu](https://www.youtube.com/watch?v=hda4-ngFEWM)
* [GitHub](https://www.youtube.com/watch?v=JLzWjJjsLz8)
* [GitHub Fork](https://www.youtube.com/watch?v=K7rE3jRCjD4)



## Instalace a spuštění

1. I když ty sama jsi projekt nezakládala z nuly pomocí `create-czechitas-app`, projekt je vytvořený pomocí tohoto nástroje a používá se úplně stejně. Jen už v sobě obsahuje i nějaké další připravené podklady, jako obrázky a údaje o filmech.

2. Otevři si v editoru složku projektu, kterou sis z GitHubu naklonovala k sobě na disk. Složka, kterou otevíráš, by měla obsahovat soubor `package.json` (a další soubory a složky).

3. Otevři si v editoru terminál / příkazovou řádku a spusť příkaz:

	```
	npm install
	```

	Tím se ti do projektu doinstalují všechny potřebné balíčky závislostí stejně, jako kdybys projekt vytvářela/instalovala pomocí `create-czechitas-app`.

4. Známým způsobem zkus projekt spustit. Měla bys vidět stránku, na které je nadpis *Zvířátka v ZOO*.



## Zadání úkolu

Tvým cílem je vytvořit stránku, která bude zobrazovat na levé straně seznam zvířat a na pravé straně detail vybraného zvířete.

1. Aplikaci budeš tvořit jako vždy ve složce `src`. Když se ale podíváš do složky `html-vzor`, máš tam připravený vzhled aplikace v podobě hotového HTML, CSS a připravených obrázků.

2. Vytvoř si komponenty:

	- `AnimalList` - to bude seznam všech zvířátek na levé straně obrazovky
	- `Animal` - to bude jedno zvířátko v seznamu (je v něm malá fotečka a český a latinský název)
	- `AnimalDetail`- to bude detail rozkliknutého zvířete s velkou fotkou a všemi podrobnostmi

	Vezmi vzorové HTML a CSS a rozkouskuj ho do příslušných komponent.

	![ukázka rozložení komponent](rozlozeni-komponent.jpg)


3. Obrázky ze složky `images` uvnitř `html-vzor` nemusíš do `src` kopírovat. V datech o zvířatkách (viz. další kroky) budou odkazy na obrázky přímo z internetu. Do aplikace si potřebuješ zkopírovat pouze obrázek `zoo.jpg`, který se v CSS používá jako pozadí celé stránky. Nezapomeň v CSS upravit cestu tak, aby správně reflektovala jeho nové umístění.

4. V hlavní APP si vytvoř stavovou proměnnou. Použij effect, který při prvním zobrazení aplikace stáhne data o zvířatech.

	Data najdeš na adrese:
	```
	https://lrolecek.github.io/zviratka-api/zvirata.json
	```
	Podívej se, jak data vypadají: [ukázka](https://lrolecek.github.io/zviratka-api/zvirata.json). Nepotřebuješ k nim žádný API klíč, jsou veřejně přístupná. Stačí udělat `fetch` na tuto adresu a data jsou tvoje.

6. Postup je "jednoduchý":

	- v `App` načti data
	- v `App` zobraz komponenty `AnimalList` a `AnimalDetail`
	- do `AnimalList` předej načtená data
	- v `AnimalList` zobraz seznam zvířat - pro každé zvíře v poli jedna komponenta `Animal`
	- v `AnimalList` reaguj na kliknutí na `Animal` - pokud k tomu dojde, řekni rodičovské komponentě (App), jaké zvíře se má zobrazit uvnitř komponenty `AnimalDetail`
	- po startu aplikace (a po načtení dat) se automaticky zobrazí první zvíře v seznamu

## Bonus 1

7. V datech o každém zvířeti je i pole nazvané `zoo`, které obsahuje identifikátory zoologických zahrad, do kterých se můžeš jít na dané zvířátko podívat.

	Seznam Zoologických zahrad si můžeš načíst z adresy:
	```
	https://lrolecek.github.io/zviratka-api/zoo.json
	```
	→ [Ukázka dat](https://lrolecek.github.io/zviratka-api/zoo.json)

8. V detailu zvířete zobraz jména zoologických zahrad, kde se zvíře nachází.


## Bonus 2

Extra bonus pro šprtky a šprty:

9. Vyrob komponentu `Search` a umísti ji nad seznam zvířat. V komponentě bude textové pole, do kterého lze psát.

10. Zařiď, aby se v seznamu zvířat zobrazovala jen ta zvířata, jejichž český nebo latinský nápis obsahuje napsaný text. Tj. komponenta `Search` musí komunikovat do `App`, jaká data má `App` vyfiltrovat ze seznamu všech zvířat a jen ty pak poslat do komponenty `AnimalList`.

11. Když hledání nebude odpovídat žádné zvíře, zobrazí se v komponentě hláška o tom, že hledání nic nenašlo.

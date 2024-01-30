import { bootstrapExtra } from "@workadventure/scripting-api-extra"
//import {} from "https://unpkg.com/@workadventure/scripting-api-extra";
bootstrapExtra();

var currentPopup = undefined;
var isCoWebSiteOpened = false;
var currentWebsite = undefined;

function closePopUp() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}

var urlTutorial =
  "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var urlFeedback =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_SoZREurD2tJrJwSfyf3bX5UNEczWlNIRkJDNjNUUjZKODUyVE9aNjQ0Uy4u";


var urlGastro =
"https://db-planet.deutschebahn.com/pages/dbgastronomie/apps/content/inhalt";
var urlDBPlanet =
  "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure";
var urlDBPlanetMaps = 
  "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/maps";
var urlTestMap = 
  "https://play.workadventu.re/@/db-systel/basic/bahnhof_test";

WA.room.onEnterLayer("needHelpZone").subscribe(()  => {
  currentPopup = WA.ui.openPopup("needHelpPopup", "Tutorial\nansehen?", [
    {
      label: "OK",
      className: "primary",
      callback: (popup) => {
        WA.nav.openTab(urlTutorial);
        isCoWebSiteOpened = true;
        closePopUp();
      },
    },
  ]);
});

WA.room.onLeaveLayer("needHelpZone").subscribe(()  => {
  closePopUp();
  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSite();
    isCoWebSiteOpened = false;
  }
});

WA.room.area.onEnter("spielregelnZone").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpSpielregeln",
    "Spielregeln:\n1. Das Team, das am schnellsten die 5 Fragen richtig beantwortet hat, gewinnt.\n2. Finde zwei weitere Mitspieler. Zu dritt seid ihr ein Team.\n3. Wenn eure Wokas nah beieinander sind, öffnet sich ein Kreisgespräch. Schließt euren Kreis ab. Aktiviert die „Folgen“-Funktion, so dass ihr zusammengehen könnt.\n4. Überlegt euch einen Teamnamen.\n 4.Geht zum Start. Gebt dort euren Teamnamen und eure Namen ein. Mit dem Absenden euer Startkarte beginnt eure Zeit zu laufen.\n 6.An den Fragesäulen 1-5 findet ihr die Fragen. Löst die Fragen und notiert euch eure Antworten.\n 7. Habt ihr alle 5 Fragen gelöst, geht zum Ziel. Tragt eure Antworten ein. Mit dem Absenden eurer Antworten wird eure Zeit gestoppt.\n\nViel Erfolg!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.area.onEnter("feedbackZone1").subscribe(() => {
  currentPopup = WA.ui.openPopup("popUpFeedback1","Wie viele Feuerlöscher gibt es in der gesamten Umgebung?\n1\n2\n3\n4\n5\nNotiert euch eure Antwort!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.area.onEnter("feedbackZone2").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpFeedback2",
    "Welche Getränke kann man am Getränkeautomaten auswählen?\nSpezi\nCappuccino\nOrangensaft\nVirgin Mojito\nMate\nNotiert euch eure Antwort!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.area.onEnter("feedbackZone3").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpFeedback3",
    "Was kann man im Garten nicht?\nFeuer knistern hören\nsich hinterm baum Verstecken\nVogelgezwitscher hören\nim Zelt kuschel\nKlavier spielen\nNotiert euch eure Antwort!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.area.onEnter("feedbackZone4").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpFeedback4",
    "Welches Spiel gibt es?\nSchach\nBowling\nBilliard\nBadminton\nNotiert euch eure Antwort!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.area.onEnter("feedbackZone5").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpFeedback5",
    "Wer hat den Co-Workingspace designed?\nJules und Niklas\nNancy und Kai\nErni und Bert\nSven und Lars\nNotiert euch eure Antwort!"
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      }
    ]
  );
});

WA.room.onEnterLayer("feedbackZone").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "feedbackPopup",
    "Was gibt's heute zu essen?",
    [
      {
        label: "Schließen",
        className: "secondary",
        callback: () => closePopUp(),
      },
      {
        label: "Speiseplan",
        className: "primary",
        callback: (popup) => {
          WA.nav.openTab(urlGastro);
        },
      },
    ]
  );
});

WA.room.onLeaveLayer("feedbackZone").subscribe(() => {
  closePopUp();
  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSite();
    isCoWebSiteOpened = false;
  }
});

WA.room.onEnterLayer("infoSaule_zone").subscribe(() => {
  currentPopup = WA.ui.openPopup("infoPopUp", WA.state.infoPopUp, [
    {
      label: "alle Neuigkeiten",
      className: "primary",
      callback: (popup) => {
        if (WA.state.info_iframe) {
          WA.nav.openCoWebSite(WA.state.infoURL);
        } else {
          WA.nav.openTab(WA.state.infoURL);
        }
        closePopUp();
      },
    },
  ]);
});

WA.room.onLeaveLayer("infoSaule_zone").subscribe(() => {
  closePopUp();
  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSite();
    isCoWebSiteOpened = false;
  }
});

WA.room.onEnterLayer("portal_program").subscribe(() => {
  currentPopup = WA.ui.openPopup(
    "popUpPortal",
    "Du willst wissen was mit WorkAdventure alles möglich ist?\nBesuche unsere Testumgebung, in der verschiedene Funktionen eingebaut und viele Umgebungen miteinander verknüpft sind! Beispiele für bestehende Welten gibt es auf DB Planet, beim Design sind keine Grenzen gesetzt und alles ist möglich!",
    [
      {
        label: "Zur Testumgebung",
        callback: (popup) => {
          WA.nav.openTab(urlTestMap);
          isCoWebSiteOpened = true;
          closePopUp();
        },
      },
      {
        label: "DB Planet",
        className: "primary",
        callback: (popup) => {
          WA.nav.openTab(urlDBPlanetMaps);
          isCoWebSiteOpened = true;
          closePopUp();
        },
      },
    ]
  );
});

WA.room.onLeaveLayer("portal_program").subscribe(() => {
  closePopUp();
  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSite();
    isCoWebSiteOpened = false;
  }
});

WA.room.onEnterLayer("designer_zone").subscribe(() => {
  currentPopup = WA.ui.openPopup("designer_PopUp", "Architekten und Designer gesucht!\nDu hast Ideen für die Gestaltung der Umgebung oder möchtest dich im Designteam kreativ einbringen?", [
    {
      label: "Mail",
      className: "primary",
      callback: (popup) => {
        WA.nav.openTab(WA.state.mail);
        isCoWebSiteOpened = true;
        closePopUp();
        },
      },
      {
        label: "Chat",
        className: "primary",
        callback: (popup) => {
          WA.nav.openTab(WA.state.chat);
          isCoWebSiteOpened = true;
          closePopUp();
        },
      },
    ]
  );
});

WA.room.onLeaveLayer("designer_zone").subscribe(() => {
  closePopUp();
});


WA.room.onEnterLayer("info_zone").subscribe(() => {
  currentPopup = WA.ui.openPopup("popUpInfo", WA.state.info_popupText, [
    {
      label: WA.state.button_info,
      callback: (popup) => {
        if (WA.state.info_iframe) {
          WA.nav.openCoWebSite(WA.state.program_info);
        } else {
          WA.nav.openTab(WA.state.program_info);
        }
      },
    },
    {
      label: WA.state.button_info2,
      callback: (popup) => {
          WA.nav.openTab(WA.state.teams_support_url);
      },
    },
    {
      label: "Schließen",
      callback: (popup) => {
          closePopUp();
      },
    },
  ]);
});

WA.room.onLeaveLayer("info_zone").subscribe(() => {
  closePopUp();
});

WA.room.onEnterLayer("reiseSaule_zone").subscribe(() => {
  currentPopup = WA.ui.openPopup("popUpReiseSaule", WA.state.popUp_saeule, [
    {
      label: WA.state.button_saeule,
      callback: (popup) => {
        if (WA.state.saeule_iframe) {
          WA.nav.openCoWebSite(WA.state.program_saeule);
        } else {
          WA.nav.openTab(WA.state.program_saeule);
        }
      },
    },
    {
      label: "Schließen",
      className: "error",
      callback: (popup) => {
        closePopUp();
      },
    },
  ]);
});

WA.room.onLeaveLayer("reiseSaule_zone").subscribe(() => {
  closePopUp();
});

WA.onInit()
  .then(async () => {
    console.log("Scripting API ready");

    if (WA.player.tags.includes("moderator")) {
      console.log("moderator Tag found!");
      let menu = WA.ui.registerMenuCommand("Konfigurieren", {
        callback: () => {
          WA.nav.openCoWebSite("../config.html", true);
        },
      });
    }

      currentPopup = WA.ui.openPopup("popUpStart","Willkommen beim Tag der Vernetzung - nutze die Chance und lerne die anderen Teilnehmenden kennen!\n\nAgenda:\n9:45-10:00 Vernetzungsspiel im Saal\n10:00 Impulsvortrag KI auf der Hauptbühne\nAb 10:30 Besuche die Sitzecke für verschiedene Gesprächsangebote, schnapp dir ein Team und nehm an unserer Rally teil oder besuche die Führung des Co-Working Bereiches! \n Darüber hinaus kannst du dich natürlich die ganze Zeit mit anderen Nachwuchskräften austauschen und vernetzen!\nDu hast ein technisches Problem? Lauf an unserem Helpdesk vorbei!\n Viel Spaß beim Vernetzen!",[
        {
            label: "Schließen",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }]
    );   
  
   WA.ui.actionBar.addButton({
            id:"minimap",
            type:"action",
            imageSrc:"data:image/png;base64,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",
            toolTip:"Minimap",
            callback: async () => {
              if (currentWebsite !== undefined) {
                currentWebsite.close();
                currentWebsite = undefined;
              } else {
                currentWebsite = await WA.nav.openCoWebSite("../minimap.html",true);
              }
            }
   })
  })
  .catch((e) => console.error(e));

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os

# Define translations for all languages
translations = {
    "de": {  # German
        "hero": {
            "title": "GTA San Andreas auf iOS",
            "subtitle": "Spiele das ultimative Verbrechensspiel auf deinem iPhone & iPad"
        },
        "introduction": {
            "title": "Was ist iOS in GTA San Andreas?",
            "description": "Wenn jemand iOS in GTA San Andreas sagt, spricht er über die Apple-Mobilversion des Spiels. iOS ist das Betriebssystem, das in iPhones und iPads verwendet wird. Es ist die Software, die Apps, Spiele und alles andere auf Apple-Geräten ausführt.",
            "points": [
                "GTA San Andreas iOS-Version - die Version des Spiels für Apple-Telefone und -Tablets",
                "Kein neues Spiel, kein Modus und kein Cheat - dieselbe Story auf Mobilgeräten",
                "Eines der meistgeladenen Mobilspiele aus der klassischen GTA-Serie"
            ]
        },
        "history": {
            "title": "Eine kurze Geschichte von GTA San Andreas auf iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas wurde zuerst für PlayStation 2 entwickelt"
                },
                {
                    "year": 2013,
                    "event": "iOS-Version für iPhones und iPads mit verbesserter Grafik veröffentlicht"
                },
                {
                    "year": 2025,
                    "event": "Wird mit besserer Stabilität und Unterstützung für neue Apple-Geräte fortgesetzt"
                }
            ]
        },
        "whyConfused": {
            "title": "Warum suchen so viele Leute 'Was ist iOS in GTA San Andreas?'",
            "reasons": [
                "Neue Spieler denken, iOS sei ein Spielmodus",
                "Viele YouTube-Videos verwenden den Begriff, ohne ihn zu erklären",
                "Junge Spieler, die zum ersten Mal Mobilgeräte benutzen, wissen möglicherweise nicht, wofür iOS steht",
                "Spieler vergleichen iOS mit Android"
            ]
        },
        "features": {
            "title": "Wie GTA San Andreas auf iOS funktioniert",
            "items": [
                {
                    "title": "Touch-Steuerung",
                    "description": "Da das Spiel auf einem Touchscreen läuft, erscheinen Tasten auf dem Bildschirm. Du kannst tippen, um zu rennen, zu fahren, zu kämpfen, zu schießen und Missionen zu erledigen. Du kannst auch Tastengröße und Layout in den Einstellungen ändern."
                },
                {
                    "title": "Verbesserte Grafik",
                    "description": "Die iOS-Version hat bessere Texturen, bessere Beleuchtung und flüssigere Charaktere im Vergleich zur alten PS2-Version. Gebäude sehen schärfer aus, Autos glänzen mehr und Wassereffekte sehen schöner aus."
                },
                {
                    "title": "Cloud-Speicherung",
                    "description": "Dies ist eine hilfreiche Funktion für iOS-Benutzer mit mehreren Geräten. Du kannst auf deinem iPhone spielen und dann über die Cloud-Speicheroption auf deinem iPad weitermachen."
                },
                {
                    "title": "Controller-Unterstützung",
                    "description": "Wenn die Touch-Steuerung schwierig ist, kannst du einen Bluetooth-Controller wie Xbox, PlayStation oder MFi-Controller anschließen. Dies macht das Gameplay näher an der Konsolenversion."
                },
                {
                    "title": "Audio- und Musikunterstützung",
                    "description": "Du kannst In-Game-Radiosender hören, genau wie in der alten Version. iOS unterstützt in einigen Updates auch deine eigene Musikbibliothek."
                }
            ]
        },
        "comparison": {
            "title": "Unterschiede zwischen GTA San Andreas iOS und anderen Versionen",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Grafik",
                            "ios": "Etwas bessere Texturen",
                            "other": "Hängt vom Gerät ab"
                        },
                        {
                            "feature": "Leistung",
                            "ios": "Sehr flüssig auf neuen Geräten",
                            "other": "Variiert je nach Telefon"
                        },
                        {
                            "feature": "Steuerung",
                            "ios": "Auf beiden gleich",
                            "other": "Auf beiden gleich"
                        },
                        {
                            "feature": "Preis",
                            "ios": "Normalerweise gleich",
                            "other": "Normalerweise gleich"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC hat bessere Grafik und Mods, aber iOS ist tragbar und überall einfacher zu spielen."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS hat verbesserte Beleuchtung und Texturen, während PS2 das ursprüngliche klassische Feeling hat."
                }
            ]
        },
        "whyPopular": {
            "title": "Warum Leute 2025 immer noch GTA San Andreas auf iOS spielen",
            "reasons": [
                "Es erinnert die Leute an ihre Kindheit",
                "Die Story ist immer noch interessant - CJs Reise fesselt die Spieler",
                "Es ist einfach herunterzuladen - nur ein paar Klicks im App Store",
                "Es funktioniert auf fast jedem modernen iPhone oder iPad",
                "Die offene Welt wird nie langweilig"
            ]
        },
        "misconceptions": {
            "title": "Häufige Missverständnisse über die iOS-Version",
            "items": [
                {
                    "myth": "iOS hat spezielle Missionen",
                    "truth": "Alle Missionen sind dieselben wie im Original"
                },
                {
                    "myth": "iOS hat eingebaute Cheats",
                    "truth": "Cheats sind nicht eingebaut, aber du kannst Cheat-Apps oder externe Tastaturen verwenden"
                },
                {
                    "myth": "iOS ist online",
                    "truth": "GTA San Andreas iOS ist nur offline, außer für Cloud-Speicherung"
                },
                {
                    "myth": "iOS hat bessere Physik",
                    "truth": "Die Physik ist ähnlich, aber die Grafik ist sauberer"
                }
            ]
        },
        "installation": {
            "title": "So installierst du GTA San Andreas auf iOS",
            "steps": [
                "Öffne den App Store",
                "Gib 'GTA San Andreas' ein",
                "Überprüfe den Entwicklernamen: Rockstar Games",
                "Kaufe und lade das Spiel herunter",
                "Warte auf die Installation",
                "Öffne das Spiel und folge dem Tutorial"
            ]
        },
        "tips": {
            "title": "Tipps zum Spielen von GTA San Andreas auf iOS",
            "items": [
                "Passe die Steuerung an - Mache Tasten größer, wenn dein Bildschirm klein ist",
                "Verwende Auto-Ziel - Dies macht das Schießen auf einem Touchscreen einfacher",
                "Schalte hohe Grafik nur ein, wenn dein Gerät es unterstützt - Ältere iPhones können laggen",
                "Speichere oft - Mobile Spiele können jederzeit schließen",
                "Verwende wenn möglich einen Controller - Dies macht Missionen einfacher"
            ]
        },
        "features2025": {
            "title": "GTA San Andreas iOS-Funktionen in 2025",
            "features": [
                "Bessere Stabilität",
                "Aktualisierte Unterstützung für neuere iPhones",
                "Verbesserte Touchscreen-Empfindlichkeit",
                "Bessere Schatten",
                "Stabilere Bildrate",
                "Cloud-Speicher-Unterstützung",
                "Controller-Unterstützung",
                "Reduzierte Verzögerung auf älteren Geräten"
            ],
            "note": "Rockstar hat die Story oder den Missionsinhalt nicht geändert, verbessert aber weiterhin die Leistung des Spiels."
        },
        "faq": {
            "title": "Häufig gestellte Fragen",
            "data": [
                {
                    "q": "Hat GTA San Andreas 2025 neue Updates erhalten?",
                    "a": "Ja, kleine Updates wurden veröffentlicht, um die Stabilität zu verbessern und das Spiel auf neuen iOS-Versionen besser laufen zu lassen."
                },
                {
                    "q": "Hat Rockstar 2025 neue Missionen hinzugefügt?",
                    "a": "Es wurden keine neuen Missionen hinzugefügt. Die Story bleibt dieselbe."
                },
                {
                    "q": "Ist GTA San Andreas 2025 noch im App Store verfügbar?",
                    "a": "Ja, das Spiel ist in den meisten Regionen noch zum Download verfügbar."
                },
                {
                    "q": "Unterstützt die iOS-Version 2025 Cheats?",
                    "a": "Du kannst Cheats mit einer externen Tastatur oder speziellen Cheat-Apps verwenden, aber Cheats sind nicht ins Spiel integriert."
                },
                {
                    "q": "Ist die iOS-Version von 2025 flüssiger als ältere Versionen?",
                    "a": "Ja, neue Geräte lassen das Spiel viel besser laufen, mit weniger Abstürzen und flüssigerem Gameplay."
                }
            ]
        },
        "conclusion": {
            "title": "Abschließende Gedanken",
            "description": "GTA San Andreas iOS ist einfach die mobile Version des Spiels für iPhones und iPads. Es hat dieselben Missionen, dieselbe Story und dieselbe offene Welt, die Spieler lieben. Egal, ob du Missionen abschließt, über die Karte streifst oder lustige Stunts versuchst, GTA San Andreas bringt Millionen von Spielern weltweit immer noch Freude. Wenn du es auf iOS spielst, weißt du bereits, wie lustig und nostalgisch es sich anfühlen kann - wie ein kleines Stück Kindheit in deiner Tasche."
        }
    },
    "es": {  # Spanish
        "hero": {
            "title": "GTA San Andreas en iOS",
            "subtitle": "Juega al juego criminal definitivo en tu iPhone e iPad"
        },
        "introduction": {
            "title": "¿Qué es iOS en GTA San Andreas?",
            "description": "Cuando alguien dice iOS en GTA San Andreas, están hablando de la versión móvil de Apple del juego. iOS es el sistema operativo utilizado en iPhones y iPads. Es el software que ejecuta aplicaciones, juegos y todo lo demás en dispositivos Apple.",
            "points": [
                "Versión de GTA San Andreas para iOS - la versión del juego hecha para teléfonos y tabletas Apple",
                "No es un juego nuevo, ni un modo, ni un truco - la misma historia en móvil",
                "Uno de los juegos móviles más descargados de la serie clásica de GTA"
            ]
        },
        "history": {
            "title": "Una breve historia de GTA San Andreas en iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas fue creado primero para PlayStation 2"
                },
                {
                    "year": 2013,
                    "event": "Versión de iOS lanzada para iPhones e iPads con gráficos mejorados"
                },
                {
                    "year": 2025,
                    "event": "Continúa con mejor estabilidad y soporte para nuevos dispositivos Apple"
                }
            ]
        },
        "whyConfused": {
            "title": "¿Por qué tanta gente busca '¿Qué es iOS en GTA San Andreas?'",
            "reasons": [
                "Los nuevos jugadores piensan que iOS es un modo de juego",
                "Muchos videos de YouTube usan el término sin explicarlo",
                "Los jugadores jóvenes que usan dispositivos móviles por primera vez pueden no saber qué significa iOS",
                "Los jugadores comparan iOS con Android"
            ]
        },
        "features": {
            "title": "Cómo funciona GTA San Andreas en iOS",
            "items": [
                {
                    "title": "Controles táctiles",
                    "description": "Como el juego está en una pantalla táctil, aparecen botones en la pantalla. Puedes tocar para correr, conducir, luchar, disparar y hacer misiones. También puedes cambiar el tamaño y diseño de los botones en la configuración."
                },
                {
                    "title": "Gráficos actualizados",
                    "description": "La versión de iOS tiene mejores texturas, mejor iluminación y personajes más suaves en comparación con la versión antigua de PS2. Los edificios se ven más nítidos, los autos brillan más y los efectos del agua se ven mejor."
                },
                {
                    "title": "Guardado en la nube",
                    "description": "Esta es una función útil para usuarios de iOS con múltiples dispositivos. Puedes jugar en tu iPhone y luego continuar en tu iPad a través de la opción de guardado en la nube."
                },
                {
                    "title": "Soporte para controladores",
                    "description": "Si los controles táctiles son difíciles, puedes conectar un controlador Bluetooth como Xbox, PlayStation o controlador MFi. Esto hace que el juego se sienta más cercano a la versión de consola."
                },
                {
                    "title": "Soporte de audio y música",
                    "description": "Puedes escuchar las estaciones de radio del juego como en la versión antigua. iOS también admite tu propia biblioteca de música en algunas actualizaciones."
                }
            ]
        },
        "comparison": {
            "title": "Diferencias entre GTA San Andreas iOS y otras versiones",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Gráficos",
                            "ios": "Texturas ligeramente mejores",
                            "other": "Depende del dispositivo"
                        },
                        {
                            "feature": "Rendimiento",
                            "ios": "Muy fluido en dispositivos nuevos",
                            "other": "Varía según el teléfono"
                        },
                        {
                            "feature": "Controles",
                            "ios": "Igual en ambos",
                            "other": "Igual en ambos"
                        },
                        {
                            "feature": "Precio",
                            "ios": "Generalmente el mismo",
                            "other": "Generalmente el mismo"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC tiene mejores gráficos y mods, pero iOS es portátil y más fácil de jugar en cualquier lugar."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS tiene iluminación y texturas mejoradas, mientras que PS2 tiene la sensación clásica original."
                }
            ]
        },
        "whyPopular": {
            "title": "Por qué la gente todavía juega GTA San Andreas en iOS en 2025",
            "reasons": [
                "Les recuerda a la infancia",
                "La historia sigue siendo interesante - el viaje de CJ mantiene a los jugadores comprometidos",
                "Es fácil de descargar - solo unos pocos toques en la App Store",
                "Funciona en casi cualquier iPhone o iPad moderno",
                "El mundo abierto nunca se vuelve aburrido"
            ]
        },
        "misconceptions": {
            "title": "Malentendidos comunes sobre la versión de iOS",
            "items": [
                {
                    "myth": "iOS tiene misiones especiales",
                    "truth": "Todas las misiones son las mismas que en el original"
                },
                {
                    "myth": "iOS tiene trucos integrados",
                    "truth": "Los trucos no están integrados, pero puedes usar aplicaciones de trucos o teclados externos"
                },
                {
                    "myth": "iOS está en línea",
                    "truth": "GTA San Andreas iOS es solo sin conexión excepto por el guardado en la nube"
                },
                {
                    "myth": "iOS tiene mejor física",
                    "truth": "La física es similar, pero los gráficos son más limpios"
                }
            ]
        },
        "installation": {
            "title": "Cómo instalar GTA San Andreas en iOS",
            "steps": [
                "Abre la App Store",
                "Escribe 'GTA San Andreas'",
                "Verifica el nombre del desarrollador: Rockstar Games",
                "Compra y descarga el juego",
                "Espera la instalación",
                "Abre el juego y sigue el tutorial"
            ]
        },
        "tips": {
            "title": "Consejos para jugar GTA San Andreas en iOS",
            "items": [
                "Ajusta los controles - Haz los botones más grandes si tu pantalla es pequeña",
                "Usa apuntado automático - Esto hace que disparar sea más fácil en una pantalla táctil",
                "Activa gráficos altos solo si tu dispositivo lo admite - Los iPhones más antiguos pueden tener retraso",
                "Guarda con frecuencia - Los juegos móviles pueden cerrarse en cualquier momento",
                "Usa un controlador si es posible - Hace que las misiones sean más fáciles"
            ]
        },
        "features2025": {
            "title": "Características de GTA San Andreas iOS en 2025",
            "features": [
                "Mejor estabilidad",
                "Soporte actualizado para iPhones más nuevos",
                "Sensibilidad de pantalla táctil mejorada",
                "Mejores sombras",
                "Velocidad de fotogramas más estable",
                "Soporte de guardado en la nube",
                "Soporte de controlador",
                "Retraso reducido en dispositivos más antiguos"
            ],
            "note": "Rockstar no ha cambiado la historia o el contenido de las misiones, pero continúan mejorando el rendimiento del juego."
        },
        "faq": {
            "title": "Preguntas frecuentes",
            "data": [
                {
                    "q": "¿GTA San Andreas recibió nuevas actualizaciones en 2025?",
                    "a": "Sí, se lanzaron pequeñas actualizaciones para mejorar la estabilidad y hacer que el juego funcione mejor en las nuevas versiones de iOS."
                },
                {
                    "q": "¿Rockstar agregó nuevas misiones en 2025?",
                    "a": "No se agregaron nuevas misiones. La historia sigue siendo la misma."
                },
                {
                    "q": "¿GTA San Andreas todavía está disponible en la App Store en 2025?",
                    "a": "Sí, el juego todavía está disponible para descargar en la mayoría de las regiones."
                },
                {
                    "q": "¿La versión de iOS admite trucos en 2025?",
                    "a": "Puedes usar trucos con un teclado externo o aplicaciones de trucos especiales, pero los trucos no están integrados en el juego."
                },
                {
                    "q": "¿La versión de iOS de 2025 es más fluida que las versiones anteriores?",
                    "a": "Sí, los nuevos dispositivos ejecutan el juego mucho mejor, con menos fallos y un juego más fluido."
                }
            ]
        },
        "conclusion": {
            "title": "Reflexiones finales",
            "description": "GTA San Andreas iOS es simplemente la versión móvil del juego hecha para iPhones y iPads. Tiene las mismas misiones, la misma historia y el mismo mundo abierto que los jugadores aman. Ya sea que estés completando misiones, recorriendo el mapa o probando acrobacias divertidas, GTA San Andreas todavía trae alegría a millones de jugadores en todo el mundo. Si lo juegas en iOS, ya sabes lo divertido y nostálgico que puede sentirse - como llevar un pequeño pedazo de infancia en tu bolsillo."
        }
    },
    "fr": {  # French
        "hero": {
            "title": "GTA San Andreas sur iOS",
            "subtitle": "Jouez au jeu criminel ultime sur votre iPhone et iPad"
        },
        "introduction": {
            "title": "Qu'est-ce qu'iOS dans GTA San Andreas?",
            "description": "Quand quelqu'un dit iOS dans GTA San Andreas, ils parlent de la version mobile Apple du jeu. iOS est le système d'exploitation utilisé dans les iPhones et iPads. C'est le logiciel qui exécute les applications, les jeux et tout le reste sur les appareils Apple.",
            "points": [
                "Version iOS de GTA San Andreas - la version du jeu faite pour les téléphones et tablettes Apple",
                "Pas un nouveau jeu, pas un mode et pas une triche - la même histoire sur mobile",
                "L'un des jeux mobiles les plus téléchargés de la série GTA classique"
            ]
        },
        "history": {
            "title": "Une brève histoire de GTA San Andreas sur iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas a d'abord été créé pour PlayStation 2"
                },
                {
                    "year": 2013,
                    "event": "Version iOS publiée pour iPhones et iPads avec des graphismes améliorés"
                },
                {
                    "year": 2025,
                    "event": "Continue avec une meilleure stabilité et un support pour les nouveaux appareils Apple"
                }
            ]
        },
        "whyConfused": {
            "title": "Pourquoi tant de gens recherchent 'Qu'est-ce qu'iOS dans GTA San Andreas?'",
            "reasons": [
                "Les nouveaux joueurs pensent qu'iOS est un mode de jeu",
                "De nombreuses vidéos YouTube utilisent le terme sans l'expliquer",
                "Les jeunes joueurs qui utilisent le mobile pour la première fois ne savent peut-être pas ce que signifie iOS",
                "Les joueurs comparent iOS avec Android"
            ]
        },
        "features": {
            "title": "Comment fonctionne GTA San Andreas sur iOS",
            "items": [
                {
                    "title": "Commandes tactiles",
                    "description": "Comme le jeu est sur un écran tactile, des boutons apparaissent à l'écran. Vous pouvez appuyer pour courir, conduire, combattre, tirer et faire des missions. Vous pouvez également modifier la taille et la disposition des boutons dans les paramètres."
                },
                {
                    "title": "Graphismes mis à jour",
                    "description": "La version iOS a de meilleures textures, un meilleur éclairage et des personnages plus fluides par rapport à l'ancienne version PS2. Les bâtiments sont plus nets, les voitures brillent davantage et les effets d'eau sont plus beaux."
                },
                {
                    "title": "Sauvegarde dans le cloud",
                    "description": "C'est une fonctionnalité utile pour les utilisateurs iOS avec plusieurs appareils. Vous pouvez jouer sur votre iPhone, puis continuer sur votre iPad via l'option de sauvegarde dans le cloud."
                },
                {
                    "title": "Support de contrôleur",
                    "description": "Si les commandes tactiles sont difficiles, vous pouvez connecter un contrôleur Bluetooth comme Xbox, PlayStation ou contrôleur MFi. Cela rend le gameplay plus proche de la version console."
                },
                {
                    "title": "Support audio et musique",
                    "description": "Vous pouvez écouter les stations de radio du jeu comme dans l'ancienne version. iOS prend également en charge votre propre bibliothèque musicale dans certaines mises à jour."
                }
            ]
        },
        "comparison": {
            "title": "Différences entre GTA San Andreas iOS et d'autres versions",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Graphismes",
                            "ios": "Textures légèrement meilleures",
                            "other": "Dépend de l'appareil"
                        },
                        {
                            "feature": "Performance",
                            "ios": "Très fluide sur les nouveaux appareils",
                            "other": "Varie selon le téléphone"
                        },
                        {
                            "feature": "Commandes",
                            "ios": "Identique sur les deux",
                            "other": "Identique sur les deux"
                        },
                        {
                            "feature": "Prix",
                            "ios": "Généralement le même",
                            "other": "Généralement le même"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC a de meilleurs graphismes et des mods, mais iOS est portable et plus facile à jouer n'importe où."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS a un éclairage et des textures améliorés, tandis que PS2 a le feeling classique original."
                }
            ]
        },
        "whyPopular": {
            "title": "Pourquoi les gens jouent encore à GTA San Andreas sur iOS en 2025",
            "reasons": [
                "Cela rappelle aux gens leur enfance",
                "L'histoire est toujours intéressante - le voyage de CJ garde les joueurs engagés",
                "C'est facile à télécharger - juste quelques clics sur l'App Store",
                "Cela fonctionne sur presque tous les iPhones ou iPads modernes",
                "Le monde ouvert ne devient jamais ennuyeux"
            ]
        },
        "misconceptions": {
            "title": "Malentendus courants sur la version iOS",
            "items": [
                {
                    "myth": "iOS a des missions spéciales",
                    "truth": "Toutes les missions sont les mêmes que dans l'original"
                },
                {
                    "myth": "iOS a des triches intégrées",
                    "truth": "Les triches ne sont pas intégrées, mais vous pouvez utiliser des applications de triche ou des claviers externes"
                },
                {
                    "myth": "iOS est en ligne",
                    "truth": "GTA San Andreas iOS est uniquement hors ligne sauf pour la sauvegarde dans le cloud"
                },
                {
                    "myth": "iOS a une meilleure physique",
                    "truth": "La physique est similaire, mais les graphismes sont plus propres"
                }
            ]
        },
        "installation": {
            "title": "Comment installer GTA San Andreas sur iOS",
            "steps": [
                "Ouvrez l'App Store",
                "Tapez 'GTA San Andreas'",
                "Vérifiez le nom du développeur: Rockstar Games",
                "Achetez et téléchargez le jeu",
                "Attendez l'installation",
                "Ouvrez le jeu et suivez le tutoriel"
            ]
        },
        "tips": {
            "title": "Conseils pour jouer à GTA San Andreas sur iOS",
            "items": [
                "Ajustez les commandes - Agrandissez les boutons si votre écran est petit",
                "Utilisez le viseur automatique - Cela rend le tir plus facile sur un écran tactile",
                "Activez les graphismes élevés uniquement si votre appareil le prend en charge - Les anciens iPhones peuvent laguer",
                "Sauvegardez souvent - Les jeux mobiles peuvent se fermer à tout moment",
                "Utilisez un contrôleur si possible - Cela rend les missions plus faciles"
            ]
        },
        "features2025": {
            "title": "Fonctionnalités de GTA San Andreas iOS en 2025",
            "features": [
                "Meilleure stabilité",
                "Support mis à jour pour les iPhones plus récents",
                "Sensibilité de l'écran tactile améliorée",
                "Meilleures ombres",
                "Fréquence d'images plus stable",
                "Support de sauvegarde dans le cloud",
                "Support de contrôleur",
                "Réduction du lag sur les anciens appareils"
            ],
            "note": "Rockstar n'a pas modifié le scénario ou le contenu des missions, mais ils continuent d'améliorer les performances du jeu."
        },
        "faq": {
            "title": "Questions fréquemment posées",
            "data": [
                {
                    "q": "GTA San Andreas a-t-il reçu de nouvelles mises à jour en 2025?",
                    "a": "Oui, de petites mises à jour ont été publiées pour améliorer la stabilité et faire fonctionner le jeu mieux sur les nouvelles versions iOS."
                },
                {
                    "q": "Rockstar a-t-il ajouté de nouvelles missions en 2025?",
                    "a": "Aucune nouvelle mission n'a été ajoutée. L'histoire reste la même."
                },
                {
                    "q": "GTA San Andreas est-il toujours disponible sur l'App Store en 2025?",
                    "a": "Oui, le jeu est toujours disponible au téléchargement dans la plupart des régions."
                },
                {
                    "q": "La version iOS prend-elle en charge les triches en 2025?",
                    "a": "Vous pouvez utiliser des triches avec un clavier externe ou des applications de triche spéciales, mais les triches ne sont pas intégrées dans le jeu."
                },
                {
                    "q": "La version iOS de 2025 est-elle plus fluide que les anciennes versions?",
                    "a": "Oui, les nouveaux appareils font fonctionner le jeu beaucoup mieux, avec moins de plantages et un gameplay plus fluide."
                }
            ]
        },
        "conclusion": {
            "title": "Réflexions finales",
            "description": "GTA San Andreas iOS est simplement la version mobile du jeu faite pour iPhones et iPads. Il a les mêmes missions, la même histoire et le même monde ouvert que les joueurs aiment. Que vous terminiez des missions, vous promeniez sur la carte ou essayiez des cascades amusantes, GTA San Andreas apporte toujours de la joie à des millions de joueurs dans le monde entier. Si vous y jouez sur iOS, vous savez déjà à quel point cela peut être amusant et nostalgique - comme porter un petit morceau d'enfance dans votre poche."
        }
    },
    "it": {  # Italian
        "hero": {
            "title": "GTA San Andreas su iOS",
            "subtitle": "Gioca all'ultimo gioco criminale su iPhone e iPad"
        },
        "introduction": {
            "title": "Cos'è iOS in GTA San Andreas?",
            "description": "Quando qualcuno dice iOS in GTA San Andreas, sta parlando della versione mobile Apple del gioco. iOS è il sistema operativo utilizzato negli iPhone e iPad. È il software che esegue app, giochi e tutto il resto sui dispositivi Apple.",
            "points": [
                "Versione iOS di GTA San Andreas - la versione del gioco fatta per telefoni e tablet Apple",
                "Non un nuovo gioco, non una modalità e non un trucco - la stessa storia su mobile",
                "Uno dei giochi mobili più scaricati della serie GTA classica"
            ]
        },
        "history": {
            "title": "Una breve storia di GTA San Andreas su iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas è stato creato per la prima volta per PlayStation 2"
                },
                {
                    "year": 2013,
                    "event": "Versione iOS rilasciata per iPhone e iPad con grafica migliorata"
                },
                {
                    "year": 2025,
                    "event": "Continua con maggiore stabilità e supporto per i nuovi dispositivi Apple"
                }
            ]
        },
        "whyConfused": {
            "title": "Perché così tante persone cercano 'Cos'è iOS in GTA San Andreas?'",
            "reasons": [
                "I nuovi giocatori pensano che iOS sia una modalità di gioco",
                "Molti video di YouTube usano il termine senza spiegarlo",
                "I giovani giocatori che usano il mobile per la prima volta potrebbero non sapere cosa significa iOS",
                "I giocatori confrontano iOS con Android"
            ]
        },
        "features": {
            "title": "Come funziona GTA San Andreas su iOS",
            "items": [
                {
                    "title": "Comandi touch",
                    "description": "Poiché il gioco è su uno schermo touch, i pulsanti appaiono sullo schermo. Puoi toccare per correre, guidare, combattere, sparare e fare missioni. Puoi anche cambiare la dimensione e il layout dei pulsanti nelle impostazioni."
                },
                {
                    "title": "Grafica aggiornata",
                    "description": "La versione iOS ha texture migliori, illuminazione migliore e personaggi più fluidi rispetto alla vecchia versione PS2. Gli edifici appaiono più nitidi, le auto brillano di più e gli effetti dell'acqua sono più belli."
                },
                {
                    "title": "Salvataggio cloud",
                    "description": "Questa è una funzione utile per gli utenti iOS con più dispositivi. Puoi giocare sul tuo iPhone, quindi continuare sul tuo iPad tramite l'opzione di salvataggio cloud."
                },
                {
                    "title": "Supporto controller",
                    "description": "Se i comandi touch sono difficili, puoi connettere un controller Bluetooth come Xbox, PlayStation o controller MFi. Questo rende il gameplay più vicino alla versione console."
                },
                {
                    "title": "Supporto audio e musica",
                    "description": "Puoi ascoltare le stazioni radio del gioco proprio come nella vecchia versione. iOS supporta anche la tua libreria musicale in alcuni aggiornamenti."
                }
            ]
        },
        "comparison": {
            "title": "Differenze tra GTA San Andreas iOS e altre versioni",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Grafica",
                            "ios": "Texture leggermente migliori",
                            "other": "Dipende dal dispositivo"
                        },
                        {
                            "feature": "Prestazioni",
                            "ios": "Molto fluido sui nuovi dispositivi",
                            "other": "Varia in base al telefono"
                        },
                        {
                            "feature": "Comandi",
                            "ios": "Uguale su entrambi",
                            "other": "Uguale su entrambi"
                        },
                        {
                            "feature": "Prezzo",
                            "ios": "Di solito lo stesso",
                            "other": "Di solito lo stesso"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC ha grafica migliore e mod, ma iOS è portatile e più facile da giocare ovunque."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS ha illuminazione e texture migliorate, mentre PS2 ha la sensazione classica originale."
                }
            ]
        },
        "whyPopular": {
            "title": "Perché le persone giocano ancora a GTA San Andreas su iOS nel 2025",
            "reasons": [
                "Ricorda alle persone l'infanzia",
                "La storia è ancora interessante - il viaggio di CJ tiene impegnati i giocatori",
                "È facile da scaricare - solo pochi tocchi sull'App Store",
                "Funziona su quasi tutti gli iPhone o iPad moderni",
                "Il mondo aperto non diventa mai noioso"
            ]
        },
        "misconceptions": {
            "title": "Fraintendimenti comuni sulla versione iOS",
            "items": [
                {
                    "myth": "iOS ha missioni speciali",
                    "truth": "Tutte le missioni sono le stesse dell'originale"
                },
                {
                    "myth": "iOS ha trucchi integrati",
                    "truth": "I trucchi non sono integrati, ma puoi usare app di trucchi o tastiere esterne"
                },
                {
                    "myth": "iOS è online",
                    "truth": "GTA San Andreas iOS è solo offline tranne per il salvataggio cloud"
                },
                {
                    "myth": "iOS ha una fisica migliore",
                    "truth": "La fisica è simile, ma la grafica è più pulita"
                }
            ]
        },
        "installation": {
            "title": "Come installare GTA San Andreas su iOS",
            "steps": [
                "Apri l'App Store",
                "Digita 'GTA San Andreas'",
                "Verifica il nome dello sviluppatore: Rockstar Games",
                "Acquista e scarica il gioco",
                "Attendi l'installazione",
                "Apri il gioco e segui il tutorial"
            ]
        },
        "tips": {
            "title": "Suggerimenti per giocare a GTA San Andreas su iOS",
            "items": [
                "Regola i comandi - Ingrandisci i pulsanti se lo schermo è piccolo",
                "Usa il mira automatica - Questo rende più facile sparare su uno schermo touch",
                "Attiva la grafica alta solo se il dispositivo lo supporta - Gli iPhone più vecchi potrebbero laggare",
                "Salva spesso - I giochi mobili possono chiudersi in qualsiasi momento",
                "Usa un controller se possibile - Rende le missioni più facili"
            ]
        },
        "features2025": {
            "title": "Funzionalità di GTA San Andreas iOS nel 2025",
            "features": [
                "Maggiore stabilità",
                "Supporto aggiornato per gli iPhone più recenti",
                "Sensibilità dello schermo touch migliorata",
                "Ombre migliori",
                "Frame rate più stabile",
                "Supporto per il salvataggio cloud",
                "Supporto controller",
                "Lag ridotto sui dispositivi più vecchi"
            ],
            "note": "Rockstar non ha cambiato la trama o il contenuto delle missioni, ma continuano a migliorare le prestazioni del gioco."
        },
        "faq": {
            "title": "Domande frequenti",
            "data": [
                {
                    "q": "GTA San Andreas ha ricevuto nuovi aggiornamenti nel 2025?",
                    "a": "Sì, sono stati rilasciati piccoli aggiornamenti per migliorare la stabilità e far funzionare meglio il gioco sulle nuove versioni iOS."
                },
                {
                    "q": "Rockstar ha aggiunto nuove missioni nel 2025?",
                    "a": "Non sono state aggiunte nuove missioni. La storia rimane la stessa."
                },
                {
                    "q": "GTA San Andreas è ancora disponibile sull'App Store nel 2025?",
                    "a": "Sì, il gioco è ancora disponibile per il download nella maggior parte delle regioni."
                },
                {
                    "q": "La versione iOS supporta i trucchi nel 2025?",
                    "a": "Puoi usare i trucchi con una tastiera esterna o app di trucchi speciali, ma i trucchi non sono integrati nel gioco."
                },
                {
                    "q": "La versione iOS del 2025 è più fluida delle versioni precedenti?",
                    "a": "Sì, i nuovi dispositivi eseguono il gioco molto meglio, con meno crash e un gameplay più fluido."
                }
            ]
        },
        "conclusion": {
            "title": "Pensieri finali",
            "description": "GTA San Andreas iOS è semplicemente la versione mobile del gioco fatta per iPhone e iPad. Ha le stesse missioni, la stessa storia e lo stesso mondo aperto che i giocatori amano. Che tu stia completando missioni, vagando per la mappa o provando acrobazie divertenti, GTA San Andreas porta ancora gioia a milioni di giocatori in tutto il mondo. Se ci giochi su iOS, sai già quanto possa essere divertente e nostalgico - come portare un piccolo pezzo di infanzia in tasca."
        }
    },
    "ja": {  # Japanese
        "hero": {
            "title": "iOS版GTA San Andreas",
            "subtitle": "iPhoneとiPadで究極の犯罪ゲームをプレイ"
        },
        "introduction": {
            "title": "GTA San AndreasのiOSとは?",
            "description": "GTA San AndreasでiOSと言う時、それはゲームのAppleモバイル版のことを指しています。iOSはiPhoneとiPadで使用されているオペレーティングシステムです。Appleデバイス上でアプリ、ゲーム、その他すべてを実行するソフトウェアです。",
            "points": [
                "GTA San Andreas iOS版 - Apple製の電話とタブレット向けに作られたゲームのバージョン",
                "新しいゲームでもモードでもチートでもない - モバイルで同じストーリー",
                "クラシックGTAシリーズの中で最もダウンロードされたモバイルゲームの1つ"
            ]
        },
        "history": {
            "title": "iOS版GTA San Andreasの簡単な歴史",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreasは最初にPlayStation 2向けに作られた"
                },
                {
                    "year": 2013,
                    "event": "改善されたグラフィックスでiPhoneとiPad向けのiOS版がリリース"
                },
                {
                    "year": 2025,
                    "event": "より良い安定性と新しいAppleデバイスのサポートで継続"
                }
            ]
        },
        "whyConfused": {
            "title": "なぜ多くの人が「GTA San AndreasのiOSとは何か」を検索するのか?",
            "reasons": [
                "新しいプレイヤーはiOSがゲームモードだと思っている",
                "多くのYouTube動画が説明せずにその用語を使用している",
                "初めてモバイルを使用する若いプレイヤーはiOSが何を意味するか知らないかもしれない",
                "プレイヤーはiOSとAndroidを比較する"
            ]
        },
        "features": {
            "title": "iOS版GTA San Andreasの動作方法",
            "items": [
                {
                    "title": "タッチコントロール",
                    "description": "ゲームがタッチスクリーン上にあるため、画面にボタンが表示されます。走る、運転する、戦う、撃つ、ミッションをするためにタップできます。設定でボタンのサイズとレイアウトを変更することもできます。"
                },
                {
                    "title": "更新されたグラフィックス",
                    "description": "iOS版は古いPS2版と比較して、より良いテクスチャ、より良い照明、よりスムーズなキャラクターを持っています。建物はより鮮明に見え、車はより輝き、水のエフェクトはより美しく見えます。"
                },
                {
                    "title": "クラウドセーブ",
                    "description": "これは複数のデバイスを持つiOSユーザーにとって便利な機能です。iPhoneでプレイして、クラウドセーブオプションを通じてiPadで続けることができます。"
                },
                {
                    "title": "コントローラーサポート",
                    "description": "タッチコントロールが難しい場合は、Xbox、PlayStation、またはMFiコントローラーなどのBluetoothコントローラーを接続できます。これによりゲームプレイはコンソール版に近い感じになります。"
                },
                {
                    "title": "オーディオと音楽のサポート",
                    "description": "古いバージョンと同じようにゲーム内のラジオ局を聴くことができます。一部のアップデートでは、iOSは独自の音楽ライブラリもサポートしています。"
                }
            ]
        },
        "comparison": {
            "title": "iOS版GTA San Andreasと他のバージョンの違い",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "グラフィックス",
                            "ios": "わずかに良いテクスチャ",
                            "other": "デバイスによる"
                        },
                        {
                            "feature": "パフォーマンス",
                            "ios": "新しいデバイスで非常にスムーズ",
                            "other": "電話によって異なる"
                        },
                        {
                            "feature": "コントロール",
                            "ios": "両方で同じ",
                            "other": "両方で同じ"
                        },
                        {
                            "feature": "価格",
                            "ios": "通常同じ",
                            "other": "通常同じ"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PCはより良いグラフィックスとModを持っていますが、iOSはポータブルでどこでもプレイしやすいです。"
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOSは改善された照明とテクスチャを持っていますが、PS2はオリジナルのクラシックな感覚を持っています。"
                }
            ]
        },
        "whyPopular": {
            "title": "なぜ人々は2025年になってもiOS版GTA San Andreasをプレイしているのか",
            "reasons": [
                "人々に子供時代を思い出させる",
                "ストーリーはまだ面白い - CJの旅はプレイヤーを引き付け続けている",
                "ダウンロードが簡単 - App Storeで数回タップするだけ",
                "ほぼすべての現代的なiPhoneまたはiPadで動作する",
                "オープンワールドは決して退屈にならない"
            ]
        },
        "misconceptions": {
            "title": "iOS版についての一般的な誤解",
            "items": [
                {
                    "myth": "iOSには特別なミッションがある",
                    "truth": "すべてのミッションはオリジナルと同じ"
                },
                {
                    "myth": "iOSにはチートが組み込まれている",
                    "truth": "チートは組み込まれていませんが、チートアプリまたは外部キーボードを使用できます"
                },
                {
                    "myth": "iOSはオンライン",
                    "truth": "GTA San Andreas iOSはクラウドセーブを除いてオフラインのみ"
                },
                {
                    "myth": "iOSはより良い物理演算を持っている",
                    "truth": "物理演算は似ていますが、グラフィックスはよりクリーン"
                }
            ]
        },
        "installation": {
            "title": "iOS版GTA San Andreasのインストール方法",
            "steps": [
                "App Storeを開く",
                "'GTA San Andreas'と入力",
                "開発者名を確認: Rockstar Games",
                "ゲームを購入してダウンロード",
                "インストールを待つ",
                "ゲームを開いてチュートリアルに従う"
            ]
        },
        "tips": {
            "title": "iOS版GTA San Andreasをプレイするためのヒント",
            "items": [
                "コントロールを調整する - 画面が小さい場合はボタンを大きくする",
                "オートエイムを使用する - これによりタッチスクリーンでの射撃が簡単になる",
                "デバイスがサポートしている場合のみ高グラフィックをオンにする - 古いiPhoneは遅延する可能性がある",
                "頻繁に保存する - モバイルゲームはいつでも閉じる可能性がある",
                "可能であればコントローラーを使用する - ミッションが簡単になる"
            ]
        },
        "features2025": {
            "title": "2025年のGTA San Andreas iOS機能",
            "features": [
                "より良い安定性",
                "新しいiPhoneの更新されたサポート",
                "改善されたタッチスクリーンの感度",
                "より良い影",
                "より安定したフレームレート",
                "クラウドセーブサポート",
                "コントローラーサポート",
                "古いデバイスでの遅延の軽減"
            ],
            "note": "Rockstarはストーリーラインやミッションコンテンツを変更していませんが、ゲームのパフォーマンスを改善し続けています。"
        },
        "faq": {
            "title": "よくある質問",
            "data": [
                {
                    "q": "GTA San Andreasは2025年に新しいアップデートを受けましたか?",
                    "a": "はい、安定性を向上させ、新しいiOSバージョンでゲームをより良く動作させるための小さなアップデートがリリースされました。"
                },
                {
                    "q": "Rockstarは2025年に新しいミッションを追加しましたか?",
                    "a": "新しいミッションは追加されていません。ストーリーは同じままです。"
                },
                {
                    "q": "GTA San Andreasは2025年にまだApp Storeで入手可能ですか?",
                    "a": "はい、ゲームはほとんどの地域でダウンロード可能です。"
                },
                {
                    "q": "iOS版は2025年にチートをサポートしていますか?",
                    "a": "外部キーボードまたは特別なチートアプリでチートを使用できますが、チートはゲームに組み込まれていません。"
                },
                {
                    "q": "2025年のiOS版は古いバージョンよりもスムーズですか?",
                    "a": "はい、新しいデバイスはクラッシュが少なく、よりスムーズなゲームプレイでゲームをはるかに良く実行します。"
                }
            ]
        },
        "conclusion": {
            "title": "最終的な考え",
            "description": "GTA San Andreas iOSは単にiPhoneとiPad向けに作られたゲームのモバイル版です。プレイヤーが愛する同じミッション、同じストーリー、同じオープンワールドを持っています。ミッションを完了したり、マップを歩き回ったり、面白いスタントを試したりしても、GTA San Andreasは世界中の何百万ものプレイヤーに今でも喜びをもたらしています。iOSでプレイする場合、それがどれほど楽しく懐かしいか既に知っています - ポケットに子供時代の小さなかけらを持ち歩いているような感じです。"
        }
    },
    "pt": {  # Portuguese
        "hero": {
            "title": "GTA San Andreas no iOS",
            "subtitle": "Jogue o jogo de crime definitivo no seu iPhone e iPad"
        },
        "introduction": {
            "title": "O que é iOS no GTA San Andreas?",
            "description": "Quando alguém diz iOS no GTA San Andreas, está falando sobre a versão móvel da Apple do jogo. iOS é o sistema operacional usado em iPhones e iPads. É o software que executa aplicativos, jogos e tudo mais em dispositivos Apple.",
            "points": [
                "Versão iOS do GTA San Andreas - a versão do jogo feita para telefones e tablets da Apple",
                "Não é um jogo novo, não é um modo e não é uma trapaça - a mesma história no celular",
                "Um dos jogos móveis mais baixados da série clássica do GTA"
            ]
        },
        "history": {
            "title": "Uma breve história do GTA San Andreas no iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas foi feito pela primeira vez para PlayStation 2"
                },
                {
                    "year": 2013,
                    "event": "Versão iOS lançada para iPhones e iPads com gráficos aprimorados"
                },
                {
                    "year": 2025,
                    "event": "Continua com melhor estabilidade e suporte para novos dispositivos Apple"
                }
            ]
        },
        "whyConfused": {
            "title": "Por que tantas pessoas pesquisam 'O que é iOS no GTA San Andreas?'",
            "reasons": [
                "Novos jogadores pensam que iOS é um modo de jogo",
                "Muitos vídeos do YouTube usam o termo sem explicá-lo",
                "Jogadores jovens usando celular pela primeira vez podem não saber o que iOS significa",
                "Jogadores comparam iOS com Android"
            ]
        },
        "features": {
            "title": "Como o GTA San Andreas funciona no iOS",
            "items": [
                {
                    "title": "Controles por toque",
                    "description": "Como o jogo está em uma tela sensível ao toque, botões aparecem na tela. Você pode tocar para correr, dirigir, lutar, atirar e fazer missões. Você também pode alterar o tamanho e o layout dos botões nas configurações."
                },
                {
                    "title": "Gráficos atualizados",
                    "description": "A versão iOS tem texturas melhores, iluminação melhor e personagens mais suaves em comparação com a versão antiga do PS2. Os prédios ficam mais nítidos, os carros brilham mais e os efeitos da água ficam melhores."
                },
                {
                    "title": "Salvamento na nuvem",
                    "description": "Este é um recurso útil para usuários do iOS com vários dispositivos. Você pode jogar no seu iPhone e depois continuar no seu iPad através da opção de salvamento na nuvem."
                },
                {
                    "title": "Suporte a controle",
                    "description": "Se os controles por toque forem difíceis, você pode conectar um controle Bluetooth como Xbox, PlayStation ou controle MFi. Isso faz com que a jogabilidade fique mais próxima da versão do console."
                },
                {
                    "title": "Suporte de áudio e música",
                    "description": "Você pode ouvir as estações de rádio do jogo assim como na versão antiga. O iOS também suporta sua própria biblioteca de música em algumas atualizações."
                }
            ]
        },
        "comparison": {
            "title": "Diferenças entre GTA San Andreas iOS e outras versões",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Gráficos",
                            "ios": "Texturas ligeiramente melhores",
                            "other": "Depende do dispositivo"
                        },
                        {
                            "feature": "Desempenho",
                            "ios": "Muito suave em novos dispositivos",
                            "other": "Varia por telefone"
                        },
                        {
                            "feature": "Controles",
                            "ios": "Igual em ambos",
                            "other": "Igual em ambos"
                        },
                        {
                            "feature": "Preço",
                            "ios": "Geralmente o mesmo",
                            "other": "Geralmente o mesmo"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC tem melhores gráficos e mods, mas iOS é portátil e mais fácil de jogar em qualquer lugar."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS tem iluminação e texturas melhoradas, enquanto PS2 tem a sensação clássica original."
                }
            ]
        },
        "whyPopular": {
            "title": "Por que as pessoas ainda jogam GTA San Andreas no iOS em 2025",
            "reasons": [
                "Lembra as pessoas da infância",
                "A história ainda é interessante - a jornada de CJ mantém os jogadores engajados",
                "É fácil de baixar - apenas alguns toques na App Store",
                "Funciona em quase qualquer iPhone ou iPad moderno",
                "O mundo aberto nunca fica chato"
            ]
        },
        "misconceptions": {
            "title": "Mal-entendidos comuns sobre a versão iOS",
            "items": [
                {
                    "myth": "iOS tem missões especiais",
                    "truth": "Todas as missões são as mesmas do original"
                },
                {
                    "myth": "iOS tem trapaças integradas",
                    "truth": "As trapaças não são integradas, mas você pode usar aplicativos de trapaça ou teclados externos"
                },
                {
                    "myth": "iOS é online",
                    "truth": "GTA San Andreas iOS é apenas offline, exceto para salvamento na nuvem"
                },
                {
                    "myth": "iOS tem melhor física",
                    "truth": "A física é semelhante, mas os gráficos são mais limpos"
                }
            ]
        },
        "installation": {
            "title": "Como instalar GTA San Andreas no iOS",
            "steps": [
                "Abra a App Store",
                "Digite 'GTA San Andreas'",
                "Verifique o nome do desenvolvedor: Rockstar Games",
                "Compre e baixe o jogo",
                "Aguarde a instalação",
                "Abra o jogo e siga o tutorial"
            ]
        },
        "tips": {
            "title": "Dicas para jogar GTA San Andreas no iOS",
            "items": [
                "Ajuste os controles - Aumente os botões se sua tela for pequena",
                "Use mira automática - Isso torna atirar mais fácil em uma tela sensível ao toque",
                "Ative gráficos altos apenas se seu dispositivo suportar - iPhones mais antigos podem ficar lentos",
                "Salve com frequência - Jogos móveis podem fechar a qualquer momento",
                "Use um controle se possível - Torna as missões mais fáceis"
            ]
        },
        "features2025": {
            "title": "Recursos do GTA San Andreas iOS em 2025",
            "features": [
                "Melhor estabilidade",
                "Suporte atualizado para iPhones mais novos",
                "Sensibilidade da tela sensível ao toque aprimorada",
                "Melhores sombras",
                "Taxa de quadros mais estável",
                "Suporte a salvamento na nuvem",
                "Suporte a controle",
                "Latência reduzida em dispositivos mais antigos"
            ],
            "note": "A Rockstar não mudou o enredo ou o conteúdo das missões, mas continua melhorando o desempenho do jogo."
        },
        "faq": {
            "title": "Perguntas frequentes",
            "data": [
                {
                    "q": "GTA San Andreas recebeu novas atualizações em 2025?",
                    "a": "Sim, pequenas atualizações foram lançadas para melhorar a estabilidade e fazer o jogo funcionar melhor nas novas versões do iOS."
                },
                {
                    "q": "A Rockstar adicionou novas missões em 2025?",
                    "a": "Nenhuma nova missão foi adicionada. A história permanece a mesma."
                },
                {
                    "q": "GTA San Andreas ainda está disponível na App Store em 2025?",
                    "a": "Sim, o jogo ainda está disponível para download na maioria das regiões."
                },
                {
                    "q": "A versão iOS suporta trapaças em 2025?",
                    "a": "Você pode usar trapaças com um teclado externo ou aplicativos de trapaça especiais, mas as trapaças não estão integradas ao jogo."
                },
                {
                    "q": "A versão iOS de 2025 é mais suave que as versões anteriores?",
                    "a": "Sim, novos dispositivos executam o jogo muito melhor, com menos travamentos e jogabilidade mais suave."
                }
            ]
        },
        "conclusion": {
            "title": "Pensamentos finais",
            "description": "GTA San Andreas iOS é simplesmente a versão móvel do jogo feita para iPhones e iPads. Tem as mesmas missões, a mesma história e o mesmo mundo aberto que os jogadores adoram. Seja completando missões, vagando pelo mapa ou tentando manobras engraçadas, GTA San Andreas ainda traz alegria a milhões de jogadores em todo o mundo. Se você joga no iOS, você já sabe como pode ser divertido e nostálgico - como carregar um pequeno pedaço da infância no bolso."
        }
    },
    "ru": {  # Russian
        "hero": {
            "title": "GTA San Andreas на iOS",
            "subtitle": "Играйте в главную криминальную игру на вашем iPhone и iPad"
        },
        "introduction": {
            "title": "Что такое iOS в GTA San Andreas?",
            "description": "Когда кто-то говорит iOS в GTA San Andreas, они говорят о мобильной версии игры для Apple. iOS - это операционная система, используемая в iPhone и iPad. Это программное обеспечение, которое запускает приложения, игры и все остальное на устройствах Apple.",
            "points": [
                "iOS версия GTA San Andreas - версия игры, созданная для телефонов и планшетов Apple",
                "Не новая игра, не режим и не читы - та же история на мобильных устройствах",
                "Одна из самых скачиваемых мобильных игр из классической серии GTA"
            ]
        },
        "history": {
            "title": "Краткая история GTA San Andreas на iOS",
            "timeline": [
                {
                    "year": 2004,
                    "event": "GTA San Andreas была впервые создана для PlayStation 2"
                },
                {
                    "year": 2013,
                    "event": "iOS версия выпущена для iPhone и iPad с улучшенной графикой"
                },
                {
                    "year": 2025,
                    "event": "Продолжает работать с лучшей стабильностью и поддержкой новых устройств Apple"
                }
            ]
        },
        "whyConfused": {
            "title": "Почему так много людей ищут 'Что такое iOS в GTA San Andreas?'",
            "reasons": [
                "Новые игроки думают, что iOS - это игровой режим",
                "Многие видео на YouTube используют термин, не объясняя его",
                "Молодые игроки, впервые использующие мобильные устройства, могут не знать, что означает iOS",
                "Игроки сравнивают iOS с Android"
            ]
        },
        "features": {
            "title": "Как работает GTA San Andreas на iOS",
            "items": [
                {
                    "title": "Сенсорное управление",
                    "description": "Поскольку игра находится на сенсорном экране, кнопки появляются на экране. Вы можете нажимать, чтобы бегать, водить, сражаться, стрелять и выполнять миссии. Вы также можете изменить размер и расположение кнопок в настройках."
                },
                {
                    "title": "Обновленная графика",
                    "description": "iOS версия имеет лучшие текстуры, лучшее освещение и более плавных персонажей по сравнению со старой версией для PS2. Здания выглядят четче, машины блестят больше, а эффекты воды выглядят лучше."
                },
                {
                    "title": "Облачное сохранение",
                    "description": "Это полезная функция для пользователей iOS с несколькими устройствами. Вы можете играть на iPhone, а затем продолжить на iPad через опцию облачного сохранения."
                },
                {
                    "title": "Поддержка контроллеров",
                    "description": "Если сенсорное управление сложное, вы можете подключить контроллер Bluetooth, такой как Xbox, PlayStation или контроллер MFi. Это делает геймплей ближе к консольной версии."
                },
                {
                    "title": "Поддержка аудио и музыки",
                    "description": "Вы можете слушать внутриигровые радиостанции так же, как в старой версии. iOS также поддерживает вашу собственную музыкальную библиотеку в некоторых обновлениях."
                }
            ]
        },
        "comparison": {
            "title": "Различия между GTA San Andreas iOS и другими версиями",
            "sections": [
                {
                    "name": "iOS vs Android",
                    "items": [
                        {
                            "feature": "Графика",
                            "ios": "Немного лучшие текстуры",
                            "other": "Зависит от устройства"
                        },
                        {
                            "feature": "Производительность",
                            "ios": "Очень плавно на новых устройствах",
                            "other": "Варьируется в зависимости от телефона"
                        },
                        {
                            "feature": "Управление",
                            "ios": "Одинаково на обоих",
                            "other": "Одинаково на обоих"
                        },
                        {
                            "feature": "Цена",
                            "ios": "Обычно одинаковая",
                            "other": "Обычно одинаковая"
                        }
                    ]
                },
                {
                    "name": "iOS vs PC",
                    "description": "PC имеет лучшую графику и моды, но iOS портативна и проще играть где угодно."
                },
                {
                    "name": "iOS vs PS2",
                    "description": "iOS имеет улучшенное освещение и текстуры, в то время как PS2 имеет оригинальное классическое ощущение."
                }
            ]
        },
        "whyPopular": {
            "title": "Почему люди все еще играют в GTA San Andreas на iOS в 2025 году",
            "reasons": [
                "Это напоминает людям о детстве",
                "История все еще интересна - путешествие CJ держит игроков вовлеченными",
                "Легко скачать - всего несколько нажатий в App Store",
                "Работает почти на любом современном iPhone или iPad",
                "Открытый мир никогда не надоедает"
            ]
        },
        "misconceptions": {
            "title": "Распространенные заблуждения о версии iOS",
            "items": [
                {
                    "myth": "iOS имеет специальные миссии",
                    "truth": "Все миссии такие же, как в оригинале"
                },
                {
                    "myth": "iOS имеет встроенные читы",
                    "truth": "Читы не встроены, но вы можете использовать приложения для читов или внешние клавиатуры"
                },
                {
                    "myth": "iOS онлайн",
                    "truth": "GTA San Andreas iOS работает только офлайн, за исключением облачного сохранения"
                },
                {
                    "myth": "iOS имеет лучшую физику",
                    "truth": "Физика похожа, но графика чище"
                }
            ]
        },
        "installation": {
            "title": "Как установить GTA San Andreas на iOS",
            "steps": [
                "Откройте App Store",
                "Введите 'GTA San Andreas'",
                "Проверьте имя разработчика: Rockstar Games",
                "Купите и загрузите игру",
                "Дождитесь установки",
                "Откройте игру и следуйте руководству"
            ]
        },
        "tips": {
            "title": "Советы по игре в GTA San Andreas на iOS",
            "items": [
                "Настройте управление - Увеличьте кнопки, если ваш экран маленький",
                "Используйте автоприцел - Это упрощает стрельбу на сенсорном экране",
                "Включайте высокую графику только если ваше устройство поддерживает - Старые iPhone могут тормозить",
                "Сохраняйтесь часто - Мобильные игры могут закрыться в любой момент",
                "Используйте контроллер, если возможно - Это упрощает миссии"
            ]
        },
        "features2025": {
            "title": "Особенности GTA San Andreas iOS в 2025 году",
            "features": [
                "Лучшая стабильность",
                "Обновленная поддержка для новых iPhone",
                "Улучшенная чувствительность сенсорного экрана",
                "Лучшие тени",
                "Более стабильная частота кадров",
                "Поддержка облачного сохранения",
                "Поддержка контроллера",
                "Уменьшенная задержка на старых устройствах"
            ],
            "note": "Rockstar не изменила сюжет или содержание миссий, но продолжает улучшать производительность игры."
        },
        "faq": {
            "title": "Часто задаваемые вопросы",
            "data": [
                {
                    "q": "Получила ли GTA San Andreas новые обновления в 2025 году?",
                    "a": "Да, были выпущены небольшие обновления для улучшения стабильности и лучшей работы игры на новых версиях iOS."
                },
                {
                    "q": "Добавила ли Rockstar новые миссии в 2025 году?",
                    "a": "Новые миссии не добавлялись. История остается прежней."
                },
                {
                    "q": "Доступна ли GTA San Andreas в App Store в 2025 году?",
                    "a": "Да, игра все еще доступна для загрузки в большинстве регионов."
                },
                {
                    "q": "Поддерживает ли iOS версия читы в 2025 году?",
                    "a": "Вы можете использовать читы с внешней клавиатурой или специальными приложениями для читов, но читы не встроены в игру."
                },
                {
                    "q": "Работает ли iOS версия 2025 года плавнее старых версий?",
                    "a": "Да, новые устройства запускают игру намного лучше, с меньшим количеством сбоев и более плавным геймплеем."
                }
            ]
        },
        "conclusion": {
            "title": "Заключительные мысли",
            "description": "GTA San Andreas iOS - это просто мобильная версия игры, созданная для iPhone и iPad. У нее те же миссии, та же история и тот же открытый мир, который любят игроки. Будь то выполнение миссий, прогулки по карте или попытки смешных трюков, GTA San Andreas все еще приносит радость миллионам игроков по всему миру. Если вы играете в нее на iOS, вы уже знаете, насколько это может быть весело и ностальгично - как носить маленький кусочек детства в кармане."
        }
    }
}

# Path to messages directory
messages_dir = r"d:/New folder/Frontend Dev/Next/App/my-gtasan-app/messages"

def update_translation_file(lang_code, translation_data):
    """Update a language file with the forIOS translation"""
    file_path = os.path.join(messages_dir, f"{lang_code}.json")

    try:
        # Read the existing file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Update the forIOS section
        data['forIOS'] = translation_data

        # Write back to file with proper formatting
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"✓ Updated {lang_code}.json successfully")
        return True
    except Exception as e:
        print(f"✗ Error updating {lang_code}.json: {str(e)}")
        return False

# Update all translation files
print("Starting translation updates...\n")
results = {}

for lang_code, translation_data in translations.items():
    results[lang_code] = update_translation_file(lang_code, translation_data)

# Print summary
print("\n" + "="*50)
print("TRANSLATION UPDATE SUMMARY")
print("="*50)
for lang_code, success in results.items():
    status = "SUCCESS" if success else "FAILED"
    print(f"{lang_code}.json: {status}")
print("="*50)

# Exit with appropriate code
if all(results.values()):
    print("\nAll translations completed successfully!")
    exit(0)
else:
    print("\nSome translations failed. Please check the errors above.")
    exit(1)

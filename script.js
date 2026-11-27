```javascript
// ========================================
// CARLROY INTERNATIONAL
// Fichier : script.js
// VERSION 3.1
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. GESTION DU MENU MOBILE

    const menuButton = document.getElementById("menuButton");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const menuIsOpen = navigation.classList.contains("active");

            menuButton.setAttribute("aria-expanded", menuIsOpen);

        });

        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    // 2. GESTION DE LA LANGUE FRANÇAIS / ANGLAIS

    const languageButton = document.getElementById("languageButton");

    let currentLanguage = "fr";


    // Fonction qui applique la langue choisie

    function applyLanguage(language) {

        currentLanguage = language;

        // Traduire les textes

        const translatableElements =
            document.querySelectorAll("[data-fr][data-en]");

        translatableElements.forEach(function (element) {

            const translation = element.getAttribute("data-" + language);

            if (translation !== null) {

                element.textContent = translation;

            }

        });


        // Traduire les espaces réservés des champs

        const translatablePlaceholders =
            document.querySelectorAll(
                "[data-placeholder-fr][data-placeholder-en]"
            );

        translatablePlaceholders.forEach(function (element) {

            element.placeholder =
                element.getAttribute("data-placeholder-" + language);

        });


        // Modifier la langue du document

        document.documentElement.lang = language;


        // Modifier le bouton de langue

        if (languageButton) {

            languageButton.textContent =
                language === "fr" ? "EN" : "FR";

        }

    }


    // Activer le bouton FR / EN

    if (languageButton) {

        languageButton.addEventListener("click", function () {

            const newLanguage =
                currentLanguage === "fr" ? "en" : "fr";

            applyLanguage(newLanguage);

        });

    }


    // 3. ANNÉE AUTOMATIQUE DANS LE FOOTER

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    // 4. PREMIUM STICKY HEADER

    const mainHeader = document.querySelector(".header");

    if (mainHeader) {

        function updateHeader() {

            if (window.scrollY > 40) {

                mainHeader.classList.add("scrolled");

            } else {

                mainHeader.classList.remove("scrolled");

            }

        }

        window.addEventListener("scroll", updateHeader);

        updateHeader();

    }


    // ========================================
    // FIN DU SCRIPT CARLROY INTERNATIONAL
    // VERSION 3.1
    // ========================================

});
```
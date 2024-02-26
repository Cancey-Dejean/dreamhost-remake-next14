import { DomainImageRow, InputSubmit, SectionTitle } from "@/components";

const domainImages = [
  {
    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjAgMTI1LjUxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNjAgMTI1LjUxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMS44NywxMjUuNTFjNi41NiwwLDExLjg3LTUuMzEsMTEuODctMTEuODdjMC02LjU2LTUuMzItMTEuODctMTEuODctMTEuODdDNS4zMiwxMDEuNzcsMCwxMDcuMDgsMCwxMTMuNjQKCUMwLDEyMC4xOSw1LjMyLDEyNS41MSwxMS44NywxMjUuNTF6IE0yMTIuNTYsMTI1LjQzYzIxLjk5LDAsMzkuODItMTcuODMsMzkuODItMzkuODJWMzUuMmgtMjQuMDJ2NTAuNGMwLDguNzMtNy4wNywxNS44LTE1LjgsMTUuOAoJYy04LjczLDAtMTUuOC03LjA4LTE1LjgtMTUuOFYzNS4yaC0yNC4wMnY1MC40QzE3Mi43NCwxMDcuNiwxOTAuNTcsMTI1LjQzLDIxMi41NiwxMjUuNDN6IE0zMTQuNjIsMTI1LjUxCgljMjUuMDYsMCw0NS4zOC0yMC4zMiw0NS4zOC00NS4zOHMtMjAuMzItNDUuMzgtNDUuMzgtNDUuMzhjLTcuNzIsMC0xNC45OSwxLjk0LTIxLjM2LDUuMzVWMGgtMjQuMDJ2ODAuMTMKCUMyNjkuMjQsMTA1LjE5LDI4OS41NiwxMjUuNTEsMzE0LjYyLDEyNS41MXogTTMxNC42Miw1OC44OWMxMS43MywwLDIxLjI0LDkuNTEsMjEuMjQsMjEuMjRzLTkuNTEsMjEuMjQtMjEuMjQsMjEuMjQKCWMtMTEuNzMsMC0yMS4yNC05LjUxLTIxLjI0LTIxLjI0UzMwMi44OSw1OC44OSwzMTQuNjIsNTguODl6IE0xNTUuMTEsMTI1LjM5VjBoLTI0LjAydjEwMS4zNwoJQzEzMS4wOSwxMTQuNjMsMTQxLjg0LDEyNS4zOSwxNTUuMTEsMTI1LjM5eiBNNzMuNjksMTI1LjUxYzIyLjQsMCw0MC45NS0xNi4yNCw0NC42Ni0zNy41N0g5My40MwoJYy0zLjExLDcuODYtMTAuNzcsMTMuNDMtMTkuNzQsMTMuNDNjLTExLjczLDAtMjEuMjMtOS41MS0yMS4yMy0yMS4yNHM5LjUxLTIxLjI0LDIxLjIzLTIxLjI0YzguOTcsMCwxNi42Miw1LjU3LDE5Ljc0LDEzLjQzaDI0LjkzCgljLTMuNzEtMjEuMzQtMjIuMjctMzcuNTctNDQuNjYtMzcuNTdjLTI1LjA2LDAtNDUuMzgsMjAuMzEtNDUuMzgsNDUuMzhTNDguNjMsMTI1LjUxLDczLjY5LDEyNS41MXoiLz4KPC9zdmc+Cg==",
    alt: "Domain 1",
    text: "$2.99",
    width: 92,
    height: 32,
    linkUrl: "/",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzAuNjkgMTI2Ljk3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ28uaW88L3RpdGxlPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iODkuNzgiIHk9IjIzLjQ3IiB3aWR0aD0iNTMuMDgiIGhlaWdodD0iODAuOSIgcng9IjIzLjkzIiByeT0iMjMuOTMiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNjQuNTgsMy44M2wtMC4yNC0uMTlBMTcuMjMsMTcuMjMsMCwwLDAsMTUzLjY0LDBIMjQuOEExLjc5LDEuNzksMCwwLDAsMjMsMS43OVYyMS4yOGExLjc5LDEuNzksMCwwLDEtMS43OSwxLjc5SDEuNzlBMS43OSwxLjc5LDAsMCwwLDAsMjQuODZ2NzcuOTJhMS43OSwxLjc5LDAsMCwwLDEuNzgsMS43OWM1LjM5LDAsMTAuODkuMTUsMTYuMzctLjA3LDMuOC0uMTYsNC45NCwxLjMzLDQuODIsNC45NS0wLjE3LDUuMjQsMCwxMC41LDAsMTUuNzVBMS43OSwxLjc5LDAsMCwwLDI0Ljc4LDEyN0gxNTguMDlhMTIuNjMsMTIuNjMsMCwwLDAsMTIuNi0xMi42VjE3LjEzQTE3LjA4LDE3LjA4LDAsMCwwLDE2NC41OCwzLjgzWk0zNy40NCw2OS4zOWEyLDIsMCwwLDEtMiwySDIzLjYzYTIsMiwwLDAsMS0yLTJWNTcuNThhMiwyLDAsMCwxLDItMkgzNS40NGEyLDIsMCwwLDEsMiwyVjY5LjM5Wm0yNS4zMSw0My42OWEyLjM1LDIuMzUsMCwwLDEtMi4zNSwyLjM1SDUzLjUxYTIuMzUsMi4zNSwwLDAsMS0yLjM1LTIuMzVWNDMuNThjMC0xLjI5LDIuMDktMS43NSwzLjM4LTEuNzVsNS44Ni0uNmEyLjM1LDIuMzUsMCwwLDEsMi4zNSwyLjM1djY5LjVabTAtOTAuODdhMiwyLDAsMCwxLTIsMkg1Mi4xMmEyLDIsMCwwLDEtMi0yVjEzLjU3YTIsMiwwLDAsMSwyLTJoOC42M2EyLDIsMCwwLDEsMiwyVjIyLjJabTkyLjkyLDU5LjdhMzQsMzQsMCwwLDEtMzMuODYsMzMuODZoLTExQTM0LDM0LDAsMCwxLDc3LDgxLjl2LTM2YTM0LDM0LDAsMCwxLDMzLjg2LTMzLjg2aDExYTM0LDM0LDAsMCwxLDMzLjg2LDMzLjg2djM2WiIvPjwvc3ZnPg==",
    text: "$39.99",
    width: 40,
    height: 32,
    linkUrl: "/",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDcuNTkgMTIzLjUzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzIxYWNiMjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ28uc3RvcmVfMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzQuMTEsNjkuNzlDMjc0LDk3LjksMjU0LjM1LDExOS42MSwyMjksMTIyLjU0Yy0xNi4zNCwxLjg4LTMxLjMzLTEuMjEtNDQtMTItMjguODYtMjQuNDEtMjEuMDktNzAuMTUsMTQuMjItODQuNDMsMjUuMzUtMTAuMjYsNTQuNjctMS4zMSw2OCwyMC43NUMyNzEuODYsNTQuNzYsMjc0LjA4LDYzLjM0LDI3NC4xMSw2OS43OVpNMjAwLjcsNzIuMTJjLS4wNSwxMi4zNCw4Ljg0LDIyLjA2LDIwLjE4LDIyczIwLTkuMjksMjAtMjEuMzYtOC44LTIxLjU5LTIwLjE2LTIxLjc0QzIwOS4yMiw1MC45MiwyMDAuNzUsNTkuODEsMjAwLjcsNzIuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDQ3LjU5LDEwMy40NmMtNi4zOSw4LjEyLTE0LDEzLjk0LTIzLjQ5LDE2Ljk1LTE1LjM2LDQuODUtMzAuNSw0LjItNDUtMi45Mi0xNy45My04LjgtMjcuNzMtMjcuOTEtMjUuOS00OS42NkMzNTUsNDYuNDIsMzY4LDI5LjM3LDM4Ny41OSwyMy43NkE2MS4wOCw2MS4wOCwwLDAsMSw0MzAsMjYuODFjMTAuNjgsNC43NCwxNS44NywxMy41NywxNi44NCwyNC45MS00Ljg1LS40MS05LjQzLS43NC0xNC0xLjI3LS42Ny0uMDgtMS40MS0xLTEuODEtMS43OC0yLjM0LTQuMjUtNS45MS02LjYzLTEwLjcyLTYuNjktMTAuNTQtLjEzLTIxLjA3LS4xMi0zMS42MSwwLTQsMC02LjEzLDIuMzEtNi4xOSw2LjMyLS4wNiw0LjE5LS4wNyw4LjM4LDAsMTIuNTcuMDcsMy41NywyLjIzLDYsNS43Nyw2LDEwLjc4LjExLDIxLjU2LjIxLDMyLjMzLDAsNi4xNC0uMTQsMTAuNzktNC45MSwxMS40My0xMS4zMi4yMi0yLjIzLDEtMi43MywzLjA5LTIuNzcsMTEuMzItLjI2LDE0LDMuNDUsOS43NSwxMy44NC00LjEsMTAuMDctMTIsMTUuMjktMjMuNjQsMTUuMzktMTAuMTguMDktMjAuMzYsMC0zMC41MywwaC00LjMxYzEuNzYsNi45NCw1LjQxLDExLjczLDExLjcsMTQsOS44NiwzLjQ5LDE5LjU2LDIsMzAuNDgtOC4xOWw5LjI2LDcuNjVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA1LjA4LDBIMTM5VjIyLjMxaDIwLjIyVjUwSDEzOS4zNWMtLjA5LDEuNDItLjIyLDIuNTYtLjIyLDMuNywwLDkuNTgsMCwxOS4xNiwwLDI4Ljc0LDAsOC42MywyLjYxLDExLjY5LDExLjEyLDExLDcuMTctLjU3LDExLjI0LDEuMjgsMTQuMTYsOC4zNywzLjQ0LDguMzQsMTAuMTksMTQuNjEsMTguMTksMjAuNTQtMS45NC4xMi0zLC4yNi00LjE1LjI2cS0yMC44NCwwLTQxLjY4LDBhNDUuOTMsNDUuOTMsMCwwLDEtNy4xNi0uNDNjLTE1LjY1LTIuNTItMjMuNzktMTEuNS0yNC4zNi0yNy41NS0uNDEtMTEuNi0uMTYtMjMuMjMtLjE3LTM0Ljg1cTAtMjcuODQsMC01NS42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05NS4zMywzMy41M2wtMTEuNCwyMWMtNy0yLjQ3LTEzLjQ5LTUuMDgtMjAuMjEtNy4wNWEzOC4yMiwzOC4yMiwwLDAsMC0xMC42NC0xLjA1Yy0yLjM2LDAtNC45My42OS01LjUsMy42NXMxLjU2LDQuNDUsMy44NSw1LjI5YzUsMS44NSwxMC4yMSwzLjM1LDE1LjI4LDUuMTVhMTU0LjQsMTU0LjQsMCwwLDEsMTQuNjksNS42N0M5Mi4xNCw3MS4zMSw5Ny43OCw3OS43Nyw5Ny4yLDkyYy0uNTcsMTItNS44LDIxLTE2Ljc5LDI2LjM3LTguMyw0LTE3LjIsNC45NS0yNi4yNCw0LjQ3LTUtLjI2LTkuOTQtMS4xMS0xNS43My0xLjc5LDUuNTUtNy43Nyw3LjI1LTE1LjYyLDMuODgtMjQsNS42NS42LDEwLjkyLDEuMjMsMTYuMjIsMS42OGE3LjM2LDcuMzYsMCwwLDAsNC4xOC0uNjFjMS4zOS0uODQsMy4xLTIuMzEsMy4yNy0zLjY5YTUuMTcsNS4xNywwLDAsMC0yLjMzLTQuMjMsMTE0Ljg0LDExNC44NCwwLDAsMC0xMS43Mi00LjMzYy02LjQyLTIuMjMtMTMuMDUtNC0xOS4yNS02Ljc0LTkuNjktNC4yOS0xNS41Ny0xMS42OC0xNi0yMi43QzE2LjE0LDQzLjg1LDIwLjczLDM0LDMxLjg5LDI3LjY2YzkuODItNS41NiwyMC41Ny02LDMxLjQtNUE3MS41NCw3MS41NCwwLDAsMSw5NS4zMywzMy41M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMTUuOTMsMTIyLjQ1SDI4Mi4wN1YyNC4xNWgzMy42NFY0MC44bC43My4yNWMuNS0uODIsMS0xLjYyLDEuNDgtMi40Niw1Ljg3LTEwLjg1LDE0LjY2LTE2LjY3LDI3LjMtMTYuMjksNy42MS4yMywxNS4yMywwLDIzLjI3LDAtMy44NSwzLjI0LTcuNTMsNS44Ny0xMC42Myw5YTQ3LjY2LDQ3LjY2LDAsMCwwLTEyLjQ1LDIzLjg1Yy0uNDUsMi4xMi0xLjEzLDIuOTQtMy40MiwzLjA4LTE1Ljg0Ljk0LTI0LjU0LDkuMzgtMjUuNDcsMjUuMzctLjY0LDExLjEtLjQzLDIyLjI0LS42LDMzLjM2QzMxNS45MSwxMTguNzEsMzE1LjkzLDEyMC4zOCwzMTUuOTMsMTIyLjQ1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTAsMTA1Ljc4QzAsOTUuODksNy4yOSw4OC41LDE3LjA4LDg4LjQ2YTE3LjI4LDE3LjI4LDAsMCwxLDE3LjU3LDE3LjM4LDE3LjU4LDE3LjU4LDAsMCwxLTE3LjQ3LDE3LjI4QTE3LjA4LDE3LjA4LDAsMCwxLDAsMTA1Ljc4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQyOCw1My41OGMtLjIzLDMuMTYtMS41Nyw0Ljc1LTMuODEsNC40OC0xLjQ4LS4xOC0zLjU2LTEuNDctNC0yLjcxcy41LTMuNTcsMS42LTQuNTRjMS42NC0xLjQ0LDMuNzUtMS4xMyw1LjU2LDEuNGEyNC45MywyNC45MywwLDAsMC0zLjMzLjQ2LDMsMywwLDAsMC0xLjYzLDEuMTIsMS41OCwxLjU4LDAsMCwwLC41MiwxLjQ4LDIuNzksMi43OSwwLDAsMCwyLDBBMjQuMzMsMjQuMzMsMCwwLDAsNDI4LDUzLjU4WiIvPjwvZz48L2c+PC9zdmc+",
    alt: "Domain 3",
    text: "$4.99",
    width: 100,
    height: 32,
    linkUrl: "/",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTQuNTMgNTkuMzgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZjYjA3O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bG9nby5kZXNpZ24uc3ZnPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTguNDgsMjguOEE4LjQ4LDguNDgsMCwxLDAsMTcsMzcuMjgsOC40OCw4LjQ4LDAsMCwwLDguNDgsMjguOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNy41OSwxMi4xOWM3LjU4LDAsMTAuMTEsNS4xOSwxMC4xMSw1LjE5aC4xM2ExOC40OSwxOC40OSwwLDAsMS0uMTMtMi4yVjBINTRWNDUuNzZINDhWNDIuNjVjMC0xLjMuMDYtMi4yLjA2LTIuMkg0OFM0NS4zLDQ2LjU0LDM3LjIsNDYuNTRjLTguODgsMC0xNC40NS03LTE0LjQ1LTE3LjE4QzIyLjc1LDE4LjkzLDI4LjksMTIuMTksMzcuNTksMTIuMTlabS44NCwyOC45MWM0Ljg2LDAsOS40Ni0zLjQ0LDkuNDYtMTEuOCwwLTUuODMtMy0xMS42Ny05LjI3LTExLjY3LTUuMTksMC05LjQ2LDQuMjgtOS40NiwxMS43M0MyOS4xNiwzNi40OSwzMyw0MS4xLDM4LjQzLDQxLjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNzguNjEsMTIuMTljOS4yNywwLDE0LjIsNi44NywxNC4yLDE1LjM2LDAsLjg0LS4xOSwyLjcyLS4xOSwyLjcySDY4LjY5QzY5LDM3LjQ3LDc0LjE0LDQxLjEsODAsNDEuMWExNS42NCwxNS42NCwwLDAsMCw5LjcyLTMuODJsMi41OSw0LjZhMTkuNTIsMTkuNTIsMCwwLDEtMTIuNyw0LjY3Yy0xMC4zMSwwLTE3LjM3LTcuNDUtMTcuMzctMTcuMThDNjIuMjEsMTguOTMsNjkuMjgsMTIuMTksNzguNjEsMTIuMTlabTcuNzgsMTMuMzVjLS4xOS01LjY0LTMuNjktOC4zNi03LjkxLTguMzYtNC44LDAtOC42OSwzLTkuNTksOC4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMDIuOTEsMzcuMjdhMTQuMDcsMTQuMDcsMCwwLDAsOS40LDMuODJjMi43MiwwLDUuNDUtMS40Myw1LjQ1LTQuMDgsMC02LTE2Ljg1LTQuOC0xNi44NS0xNS40OSwwLTYsNS4zMS05LjMzLDExLjg2LTkuMzMsNy4yLDAsMTAuNTcsMy42MywxMC41NywzLjYzbC0yLjUzLDQuNzNhMTIsMTIsMCwwLDAtOC4xLTIuOTJjLTIuNzIsMC01LjM4LDEuMTctNS4zOCw0LDAsNS45LDE2Ljg1LDQuNiwxNi44NSwxNS4zNiwwLDUuNDQtNC42Nyw5LjUzLTExLjg2LDkuNTNhMTcuNjMsMTcuNjMsMCwwLDEtMTIuNDUtNC44WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzMS4zNCwwaDYuMzVWNi40MmgtNi4zNVptLjA2LDEzaDYuMjl2MzIuOGgtNi4yOVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNjAsNTMuOTNjNS43LDAsMTAuMzctMi41MywxMC4zNy05LjJ2LTIuNGMwLTEsLjA2LTIuMDcuMDYtMi4wN2gtLjEzYy0xLjk0LDMuMjQtNSw1LjEyLTkuNzIsNS4xMi05LjE0LDAtMTQuNjUtNy4zMi0xNC42NS0xNi43OXM1LjI1LTE2LjQsMTQuMzMtMTYuNGM3LjkxLDAsMTAuMzEsNC44NiwxMC4zMSw0Ljg2aC4xM2E4LjE5LDguMTksMCwwLDEtLjA2LTFWMTNoNlY0NC40YzAsMTAuODMtOC4yMywxNS0xNi41MywxNWEyNS41NSwyNS41NSwwLDAsMS0xMS4yMS0yLjcyTDE1MSw1MS43M0EyMS4xMywyMS4xMywwLDAsMCwxNjAsNTMuOTNabTEwLjUtMjUuMjhjMC04LjU2LTQuMTUtMTEtOS4yNy0xMS01LjcsMC04Ljk1LDQuMTUtOC45NSwxMC44M3MzLjYzLDExLjQ3LDkuNTMsMTEuNDdDMTY2LjMzLDM5LjkzLDE3MC40NywzNy4yMSwxNzAuNDcsMjguNjVaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTg0Ljg0LDEzaDYuMDl2NC4zNGEyMy4xMiwyMy4xMiwwLDAsMS0uMTMsMi40aC4xM2ExMy4zNSwxMy4zNSwwLDAsMSwxMi4zMi03LjUyYzcuNzEsMCwxMS4yOCw0LjIxLDExLjI4LDEyLjU4djIxaC02LjI5VjI2LjE5YzAtNC42LTEtOC4yMy02LjIyLTguMjNhMTAuNzQsMTAuNzQsMCwwLDAtMTAuMzcsOCwxNS41MSwxNS41MSwwLDAsMC0uNTIsNC40MVY0NS43NmgtNi4yOVoiLz48L2c+PC9nPjwvc3ZnPg==",
    alt: "Domain 4",
    text: "$7.99",
    width: 100,
    height: 32,
    linkUrl: "/",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NTAuMTYgMzc4LjciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+bG9nby54eXo8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcxOCwxNDUuNzNDNzE4LDk2LjE1LDY3Ny42Niw1Myw2MjguMDgsNTNIMjMxLjM5YTkyLjI1LDkyLjI1LDAsMCwwLTg3LjQ1LDEyMC45MSw5My4xLDkzLjEsMCwwLDAtNDYuMjYsMjQuNTljLTE3Ljg5LDE3LjY5LTI3Ljc0LDQyLjQyLTI3Ljc0LDY5LjYzLDAsMjcuNTEsMTAuMTcsNTIuMzcsMjguNjQsNzBDMTEwLjkyLDM1MCwxMzIuNjYsMzY0LDE2Ni4xNiwzNjRIMjMwYTkyLjU0LDkyLjU0LDAsMCwwLDQ3Ljc2LTEzLjI2LDkwLjU3LDkwLjU3LDAsMCwwLDkwLjc5LDgxLDEzNy4yLDEzNy4yLDAsMCwwLDkyLTM0LjgzYzEzLjU1LTExLjk0LDI1LjI3LTI2LjU0LDM1LjUyLTQ0LjIxYTg4LjU3LDg4LjU3LDAsMCwwLDM4LDguNTRoOTYuODFBODkuMzEsODkuMzEsMCwwLDAsNzIwLjEsMjcyWk0xNjYuMTYsMjkyLjA4Yy0xNC43NCwwLTIzLjE1LTcuMzYtMjMuMTUtMjIuOCwwLTE1Ljc5LDguNDEtMjMuNSwyMy4xNS0yMy41czIyLjgsNy43MSwyMi44LDIzLjVDMTg5LDI4NC43MSwxODAuODksMjkyLjA4LDE2Ni4xNiwyOTIuMDhabTE2Mi43NSwwYy01LjI2LDAtMTEuNTgtMi40Ni0xNS4wOC03LjM2LTEwLjg3LTE1LjA4LTM0LjM4LTQ4LjQxLTM0LjM4LTQ4LjQxcy0yMy41LDMzLjMyLTM0LjM3LDQ4LjQxYy0zLjUxLDQuOTEtOS44Miw3LjM2LTE1LjA4LDcuMzZBMTguODYsMTguODYsMCwwLDEsMjExLDI3My4xNGMwLTUuMjYsMS43NS04LjQyLDMuODYtMTEuNThsNDIuNDQtNTMuMzItNDEtNTAuNTFhMTguNDEsMTguNDEsMCwwLDEtMy44Ni0xMS41OCwxOC44NiwxOC44NiwwLDAsMSwxOC45NC0xOC45NCwxOS4xMSwxOS4xMSwwLDAsMSwxNS4wOCw3LjM2bDMzLDQ1LjI1LDMzLTQ1LjI1YTE5LjEyLDE5LjEyLDAsMCwxLDE1LjA4LTcuMzYsMTguODYsMTguODYsMCwwLDEsMTguOTQsMTguOTQsMTguNCwxOC40LDAsMCwxLTMuODYsMTEuNThsLTQxLDUwLjUxTDM0NCwyNjEuNTZjMi4xMSwzLjE2LDMuODYsNi4zMSwzLjg2LDExLjU4QTE4Ljg2LDE4Ljg2LDAsMCwxLDMyOC45LDI5Mi4wOFpNNTA2LjM4LDE1My41M0w0NDEuMTQsMzAwLjg0Yy0xNS40MywzNC4zNy0zNy41Myw1OC45My03Mi42LDU4LjkzLTEwLjE3LDAtMTguMjQtNy4zNy0xOC4yNC0xNy41M3M4LjA3LTE3LjU0LDE4LjI0LTE3LjU0YzIyLjQ1LDAsMzMtMTcuODksNDQuNTUtNDYuNjVsLTU0LTEyNC41MmExOS42MSwxOS42MSwwLDAsMS0xLjQtNy4zNywxOC44NiwxOC44NiwwLDAsMSwxOC45NC0xOC45NCwxOC40NywxOC40NywwLDAsMSwxNy41NCwxMS45MmwzOC41OSw5Ny41MSwzOC41OC05Ny41MWExOC40OCwxOC40OCwwLDAsMSwxNy41NC0xMS45MiwxOC44NiwxOC44NiwwLDAsMSwxOC45NCwxOC45NEExOS42NSwxOS42NSwwLDAsMSw1MDYuMzgsMTUzLjUzWk02MzAuODksMjg5LjI3SDUzNC4wOGExNi4zMiwxNi4zMiwwLDAsMS0xNi4xMy0xNi4xM2MwLTQuOTEsMS43NS03LjcyLDMuODYtMTAuNTJsNDEuOC01NmgwbDI2LjQ2LTM1LjQ4LDcuMTMtOS41Nkg1MzcuOTRhMTUuNzgsMTUuNzgsMCwxLDEsMC0zMS41N2g5MC4xNGExNi45NSwxNi45NSwwLDAsMSwxMywyNy43MWwtNzQsOTkuMjZoNjMuODRBMTYuMTMsMTYuMTMsMCwxLDEsNjMwLjg5LDI4OS4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OS45MyAtNTMuMDEpIi8+PC9zdmc+",
    alt: "Domain 5",
    text: "$1.99",
    width: 55,
    height: 32,
    linkUrl: "/",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU0Ljg3IDYwLjg3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6I2ZmZjt9LmNscy0ze2ZpbGw6IzgyZDFmNTt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAsMzAuODJBMTMuMDcsMTMuMDcsMCwxLDAsMTMuMDcsMTcuNzUsMTMuMDcsMTMuMDcsMCwwLDAsMCwzMC44MkgwIi8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOTcuODUsMzcuMzNhMzAuNjUsMzAuNjUsMCwwLDEtNjAuNDYtN0EzMCwzMCwwLDAsMSw2Ny4wNiwwaC40NUM4Mi42MywwLDk0Ljg3LDEwLDk3Ljc1LDI0SDgwLjQ3Yy0xLjg1LTMuOTEtNS4yNC04LTEyLjM0LThhMTIuMjgsMTIuMjgsMCwwLDAtOS44Nyw0LDE1LjcxLDE1LjcxLDAsMCwwLTMuNywxMC40OUM1NC41NiwzOC44Miw2MCw0NSw2OC4xMyw0NWM3LjEsMCwxMC40OS00LjExLDEyLjM0LTcuNjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTAxLjI2LDMwLjM0QzEwMS4yNiwxNi40NSwxMTEuMjMuMSwxMzIsLjFzMzAuNzUsMTYuMzUsMzAuNzUsMzAuMzMtMTAsMzAuMzMtMzAuNzUsMzAuMzMtMzAuNzUtMTYuMzUtMzAuNzUtMzAuMzNabTE3LjA3LjJjMCw4LjIzLDYuMjcsMTQuMjksMTMuNjgsMTQuMjlzMTMuNjgtNi4wNiwxMy42OC0xNC4zOVMxMzkuNDEsMTYsMTMyLDE2cy0xMy42OCw2LjA3LTEzLjY4LDE0LjRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTY3LjI3LDJoMTUuOTRWOGExMy41MiwxMy41MiwwLDAsMSwzLjQ5LTRjMi40Ny0yLjA2LDYuNDgtNCwxMi40NC00QTE3LjQ0LDE3LjQ0LDAsMCwxLDIxMi4yLDUuNDVhMTkuNDksMTkuNDksMCwwLDEsMy4zOSw0LjczLDIzLjc0LDIzLjc0LDAsMCwxLDQuMTEtNC45NEEyMC4yNywyMC4yNywwLDAsMSwyMzMuNywwYzQsMCwxMC4zOS45MywxNSw1Ljc2LDUuMzUsNS42Niw2LjE3LDkuNDYsNi4xNywyMi4xMVY1OUgyMzcuODFWMjguNjljMC0yLjM3LDAtNS40NS0xLjEzLThTMjMzLjQ5LDE2LDIyOS4wNywxNmMtNC43MywwLTcuMSwyLjE2LTguMjMsNC43M2ExNi40MywxNi40MywwLDAsMC0xLjIzLDcuMDlWNTlIMjAyLjU0VjI4YTE5LjQ0LDE5LjQ0LDAsMCwwLTEtNy4wOUE3LjQ2LDcuNDYsMCwwLDAsMTk0LDE2Yy00LjgzLDAtNy4yLDIuMjYtOC40Myw1YTE4Ljg1LDE4Ljg1LDAsMCwwLTEuMjMsNy42MVY1OUgxNjcuMjdaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMCwzMC44MkExMy4wNywxMy4wNywwLDEsMCwxMy4wNywxNy43NSwxMy4wNywxMy4wNywwLDAsMCwwLDMwLjgySDAiLz48ZyBjbGFzcz0iY2xzLTQiPjxyZWN0IGNsYXNzPSJjbHMtMyIgeT0iMTcuNzUiIHdpZHRoPSIyNi4xNCIgaGVpZ2h0PSIyNi4xNCIvPjwvZz48L3N2Zz4=",
    alt: "Domain 6",
    text: "$8.99",
    width: 100,
    height: 32,
    linkUrl: "/",
  },
];

export default function FindDomain() {
  return (
    <section className="text-white">
      <div className="col-span-full col-start-2 grid grid-cols-16 rounded-32 bg-darkPurple px-8 py-20">
        <div className="col-span-9 col-start-1 ml-8 self-center">
          <InputSubmit label="Find your perfect domain name..." />

          <div className="col-span-9 col-start-1 mt-8">
            <div className="flex items-center justify-between">
              {domainImages.map((image) => (
                <DomainImageRow
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  text={image.text}
                  key={image.text}
                  linkUrl={image.linkUrl}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 col-start-10 pl-16 pr-8">
          <SectionTitle as="h3" className="text-8xl">
            Find Your Perfect <br /> Domain Name
          </SectionTitle>
        </div>
      </div>
    </section>
  );
}

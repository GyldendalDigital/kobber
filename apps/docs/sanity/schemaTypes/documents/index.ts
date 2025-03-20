import { footer } from "./footer"
import { homePage } from "./home-page"
import { navbar } from "./navbar"
import { page } from "./page"
import { settings } from "./settings"

export const singletons = [homePage, settings, footer, navbar]

export const documents = [page, ...singletons]

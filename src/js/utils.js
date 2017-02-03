import { publications } from '../publications.js'

export const isRts = () => {
  return !!window.location.hostname.match(/rts.ch$/)
}

export const getContainerSelector = () => {
  for (let publication of publications) {
    if (!!window.location.hostname.match(publication.hostnameRegex)) {
      return publication.containerSelector
    }
  }
}

export const getLocale = () => {
  if (isRts()) {
    return 'fr'
  }
  return 'de'
}

const translations = {
  'title': {
    de: 'Interessenbindungen gemäss Lobbywatch.ch',
    fr: 'Les liens d’intérêts selon Lobbywatch.ch'
  },
  'Detail/link': {
    de: 'Profil ansehen',
    fr: 'Voir le profil'
  },
  'Detail/directConnections': {
    de: 'Ist mit Firmen, Verbänden und Organisationen in folgenden Lobbygruppen verbunden:',
    fr: 'Est liée aux entreprises, associations ou organisations suivantes:'
  },
  'Connections/more/singular': {
    de: 'Weiteres',
    fr: 'autre'
  },
  'Connections/more/plural': {
    de: 'Weitere',
    fr: 'autres'
  },
  'loading': {
    de: 'Lädt...',
    fr: 'charger...'
  },
  'List/parliamentarians': {
    de: 'In diesem Artikel kommen folgende Parlamentarier vor:',
    fr: 'Dans cet article, les parlementaires suivants se produisent:'
  },
  'List/guests': {
    de: 'In diesem Artikel kommen folgende Gäste vor:',
    fr: 'Dans cet article, les invités suivants arrivent avant:'
  },
  'Detail/NR-M': {
    de: 'Nationalrat',
    fr: 'Le Conseiller national'
  },
  'Detail/NR-F': {
    de: 'Nationalrätin',
    fr: 'La Conseillère nationale'
  },
  'Detail/SR-M': {
    de: 'Ständerat',
    fr: 'Le Conseiller aux Etats'
  },
  'Detail/SR-F': {
    de: 'Ständerätin',
    fr: 'La Conseillère aux Etats'
  },
  'Detail/invited-by': {
    de: 'eingeladen von',
    fr: 'invité par'
  },
  'Disclosure/none': {
    de: 'Keine Namen erkannt',
    fr: 'Aucun nom reconnu'
  }
}

export const t = key => {
  return (translations[key] || {})[getLocale()]
}

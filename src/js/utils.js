export const isRts = () => {
  return !!window.location.hostname.match(/rts.ch$/)
}

export const getLocale = () => {
  if (isRts()) {
    return 'fr'
  }
  return 'de'
}

const translations = {
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
    fr: ''
  },
  'Connections/more/plural': {
    de: 'Weitere',
    fr: ''
  },
  'loading': {
    de: 'Lädt...',
    fr: 'charger...'
  },
  'List/title': {
    de: 'In diesem Artikel kommen folgende Parlamentarier vor:',
    fr: 'Dans cet article, les parlementaires suivants se produisent:'
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
  }
}

export const t = key => {
  return translations[key][getLocale()]
}

import React from 'react'

const Info = ({size, style, className}) => (
  <div style={{minWidth: 400}}>
    <h1>Lobbylayer</h1>
    <h2>Wie funktioniert es?</h2>
    <p>Wenn Sie auf rts.ch oder srf.ch einen Artikel lesen, fügt diese Erweiterung am Ende des Artikels eine Sektion mit den Interessenbindungen der im Artikel erwähnten Personen hinzu.</p>
    <h2>Mögliche Probleme</h2>
    <p>Die Personen werden durch Nach- und Vornamen erkannt. Es kann zu Fehler, sprich zum Beispiel Verwechslungen mit gleichnamigen Personen, kommen. Prüfen Sie selbst, ob es sich tatsächlich um die gesuchte Person handelt.</p>
    <h3>Datenquelle: Lobbywatch, Plattform für eine transparente Politik</h3>
    <p><a href='https://lobbywatch.ch/de/content/projekt' target='_blank'>Mehr über Lobbywatch erfahren</a></p>
  </div>
)

export default Info

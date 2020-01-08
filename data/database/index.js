import { databaseSchema } from './schema.js'

import { akumuli } from './akumuli.js'
import { atlas } from './atlas.js'
import { beringei } from './beringei.js'
import { biggraphite } from './biggraphite.js'
import { blueflood } from './blueflood.js'
import { btrdb } from './btrdb.js'
import { catena } from './catena.js'
import { dalmatinerdb } from './dalmatinerdb.js'
import { flint } from './flint.js'
import { hawkularmetrics } from './hawkularmetrics.js'
import { heroic } from './heroic.js'
import { influxdb } from './influxdb.js'
import { kairosdb } from './kairosdb.js'
import { khronus } from './khronus.js'
import { newts } from './newts.js'
import { opentsdb } from './opentsdb.js'
import { prometheus } from './prometheus.js'
import { seriously } from './seriously.js'
import { tgres } from './tgres.js'
import { timescaldb } from './timescaledb.js'
import { vaultaire } from './vaultaire.js'
import { xephonk } from './xephonk.js'

let databases = [
  akumuli,
  atlas,
  beringei,
  biggraphite,
  blueflood,
  btrdb,
  catena,
  dalmatinerdb,
  flint,
  hawkularmetrics,
  heroic,
  influxdb,
  kairosdb,
  khronus,
  newts,
  opentsdb,
  prometheus,
  seriously,
  tgres,
  timescaldb,
  vaultaire,
  xephonk,
]

export { databaseSchema, databases }
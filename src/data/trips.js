import RomeCover from '../assets/img/photos/rome-cover.webp'
import IstanbulCover from '../assets/img/photos/istanbul-cover.webp'
import LisbonCover from '../assets/img/photos/lisbon-cover.webp'
import KyotoCover from '../assets/img/photos/kyoto-cover.webp'
import RomeStreet from '../assets/img/photos/rome-street.webp'
import IstanbulOrtakoy from '../assets/img/photos/istanbul-ortakoy.webp'
import LisbonTram from '../assets/img/photos/lisbon-tram.webp'
import KyotoLane from '../assets/img/photos/kyoto-lane.webp'

// Illustrative trip facts for a portfolio piece: durations, group sizes and prices are not real offers.
export const TRIPS = [
  { key: 'rome', cover: RomeCover, photo: RomeStreet, days: 9, group: 10, price: 2900 },
  { key: 'istanbul', cover: IstanbulCover, photo: IstanbulOrtakoy, days: 8, group: 12, price: 2400 },
  { key: 'lisbon', cover: LisbonCover, photo: LisbonTram, days: 7, group: 10, price: 2150 },
  { key: 'kyoto', cover: KyotoCover, photo: KyotoLane, days: 11, group: 8, price: 4600 },
]

export const formatPrice = (value, locale) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)

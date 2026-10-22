import EmptyState from '../common/EmptyState'

export default function EmptyWishlist() {
  return (
    <EmptyState icon="💛" title="Nothing saved just yet." action="Browse happy finds">
      Tap the little heart on anything you love, and it’ll be right here.
    </EmptyState>
  )
}

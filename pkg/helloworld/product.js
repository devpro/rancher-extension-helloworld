export function init($plugin, store) {
  const { product } = $plugin.DSL(store, $plugin.name);

  product({
    icon:                'gear',
    inStore:             'management',
    removable:           false,
    showClusterSwitcher: false,
  });
}

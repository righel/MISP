<?php
// FIXME chri - figure out a way to use the boolean element here, with text-warning as class (not danger) so it can be orange
// FIXME chri - there's something with rule_path in the boolean, but not sure how that works
$exists = $this->Hash->extract($row, $field['data_path'] . 'exists_locally')[0];
if ($exists) {
    $differences = $this->Hash->extract($row, $field['data_path'] . 'differences');
}
if (empty($exists)) {
    $icon = 'times';
    $colour = 'red';
    $text = __('Object does not exist locally.');
} else {
    if (empty($differences)) {
        $icon = 'check';
        $colour = 'green';
        $text = __('Object exists locally.');
    } else {
        $icon = 'sync';
        $colour = 'organge';
        $text = __('Object exists locally, but the following fields contain different information on the remote: {0}', implode(', ', $differences));
    }
}
echo sprintf(
    '<i class="%s fa fa-%s" role="img" aria-label="%s" title="%s"></i>',
    $colour,
    $icon,
    $text,
    $text
);

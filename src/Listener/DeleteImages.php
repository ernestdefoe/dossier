<?php

namespace Ernestdefoe\Dossier\Listener;

use Ernestdefoe\Dossier\Entry;
use Ernestdefoe\Dossier\Storage\Images;
use Flarum\User\Event\Deleting;

/** A deleted member's dossier rows go with them (foreign keys); their certificate pictures go here. */
class DeleteImages
{
    public function __construct(protected Images $images)
    {
    }

    public function handle(Deleting $event): void
    {
        foreach (Entry::query()->where('user_id', $event->user->id)->whereNotNull('image')->pluck('image') as $image) {
            $this->images->delete($image);
        }
    }
}

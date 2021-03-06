import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[dropZone]'
})
export class DropZoneDirective {

    @Output() dropped = new EventEmitter<FileList>();
    @Output() hovered = new EventEmitter<boolean>();


    constructor() { }

    @HostListener('drop', ['$event'])
    ondrop($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    }
}

import {NgModule} from '@angular/core'
import {AccordionModule} from 'primeng/accordion';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OverlayModule} from 'primeng/overlay';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SpeedDialModule} from 'primeng/speeddial';
import {SpinnerModule} from 'primeng/spinner';
import {StepsModule} from 'primeng/steps';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';

 @NgModule({
    imports:[
        AvatarModule,BadgeModule,BreadcrumbModule,ButtonModule,CardModule,ConfirmDialogModule,DialogModule,DropdownModule,DynamicDialogModule,
        FileUploadModule,MenuModule,MessageModule,MultiSelectModule,OverlayModule,PaginatorModule,PanelModule,PanelMenuModule,
        ProgressBarModule,ProgressSpinnerModule,RadioButtonModule,SelectButtonModule,SidebarModule,SpinnerModule,StepsModule,TableModule,
        SpeedDialModule,TabMenuModule,TimelineModule,ToastModule,ToolbarModule,TooltipModule,DataViewModule,RatingModule,TagModule
     ],
    exports: [
        AvatarModule,BadgeModule,BreadcrumbModule,ButtonModule,CardModule,ConfirmDialogModule,DialogModule,DropdownModule,DynamicDialogModule,
        FileUploadModule,MenuModule,MessageModule,MultiSelectModule,OverlayModule,PaginatorModule,PanelModule,PanelMenuModule,
        ProgressBarModule,ProgressSpinnerModule,RadioButtonModule,SelectButtonModule,SidebarModule,SpinnerModule,StepsModule,TableModule,
        SpeedDialModule,TabMenuModule,TimelineModule,ToastModule,ToolbarModule,TooltipModule,DataViewModule,RatingModule,TagModule
    ]
 })
 export class PrimeNGModule { }

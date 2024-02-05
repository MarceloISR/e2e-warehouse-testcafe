import { Button, MenuButton } from "../../basicObjects";
import { Toolbar } from "../../pageObject";

export class InventoryByLPNToolbar extends Toolbar {
    public View : Button;
    public Relocate : Button;
    public Reprint : Button;

    public Refresh: Button;
    public Search: Button;
    public Filter: Button;
    public ExportCSV: Button;
    public ExportPDF: Button;
    public Email: Button;
    public More: MenuButton;

    constructor(selector: Selector) {
        super(selector);

        this.View = new Button(this._container.find("span:nth-child(1) button"));
        this.Relocate  = new Button(this._container.find("span:nth-child(2) button"));
        this.Reprint = new Button(this._container.find("span:nth-child(3) button"));

        this.Refresh = new Button(this._container.find("span:nth-child(4) button"));
        
        this.Search = new Button(this._container.find("span:nth-child(5) button"));
        this.Filter = new Button(this._container.find("span:nth-child(6) button"));
        this.ExportCSV = new Button(this._container.find("span:nth-child(7) button"));
        this.ExportPDF = new Button(this._container.find("span:nth-child(8) button"));
        this.Email = new Button(this._container.find("span:nth-child(9) button"));
        this.More = new MenuButton(this._container.find("kendo-menu ul[role='menubar'] button"));
    }
}
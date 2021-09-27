import React from "react";
import "./MuvaffaqiyatliJunatildi.css"

function MuvaffaqiyatliJunatildi() {
    const Reload = () => {
        window.location.reload(false);
    }
    return (
        <div>
            {/* Modal */}
            <div class="modal fade" id="aloqaYuborish" tabindex="-1" aria-labelledby="aloqaYuborishLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Habaringiz Muvaffaqiyatli jo'natildi. Sizga tez orada aloqaga chiqamiz.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={Reload}>Close</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MuvaffaqiyatliJunatildi;
package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.TipoLocal;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/tipolocal")
public class TipoLocalController {
    
    @Autowired
    TipoLocalService tipoLocalService;

    @GetMapping
    public List<TipoLocal> listarTiposLocal() {
        return tipoLocalService.listarTiposLocal();
    }

    @PostMapping
    public void cadastrarTipoLocal(@RequestBody TipoLocal tipoLocal) {
        tipoLocalService.cadastrarTipoLocal(tipoLocal);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarTipoLocal(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     tipoLocalService.atualizarTipoLocal(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirTipoLocal(@PathVariable Integer id) {
        tipoLocalService.excluirTipoLocal(id);
    }

}
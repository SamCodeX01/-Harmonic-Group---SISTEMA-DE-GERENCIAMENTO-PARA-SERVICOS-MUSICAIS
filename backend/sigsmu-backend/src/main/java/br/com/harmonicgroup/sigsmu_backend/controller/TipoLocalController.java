package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.TipoLocal;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@RequestMapping("/tipolocal")
public class TipoLocalController {
    
    @Autowired
    TipoLocalService tipoLocalService;

    @GetMapping
    public List<TipoLocal> listarTipoLocais() {
        return tipoLocalService.listarTiposLocais();
    }

}

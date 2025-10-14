package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.TipoLocal;
import br.com.harmonicgroup.sigsmu_backend.repository.TipoLocalRepository;

@Service
public class TipoLocalService {
    
    @Autowired
    TipoLocalRepository tipoLocalRepository;

    public List<TipoLocal> listarTiposLocais() {
        return tipoLocalRepository.findAll();
    }

    public void cadastrarTipoLocal(TipoLocal tipoLocal) {
        tipoLocalRepository.save(tipoLocal);
    }

}

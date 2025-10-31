package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.TipoLocal;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.TipoLocalRepository;

@Service
public class TipoLocalService {
    
    @Autowired
    TipoLocalRepository tipoLocalRepository;

    public List<TipoLocal> listarTiposLocal() {
        return tipoLocalRepository.findAll();
    }

    public void cadastrarTipoLocal(TipoLocal tipoLocal) {
        tipoLocalRepository.save(tipoLocal);
    }

    // public void atualizarTipoLocal(UpdateDTO body, Integer id) {
    //     TipoLocal atual = tipoLocalRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Tipo de local não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     tipoLocalRepository.save(atual);
    // }

    public void excluirTipoLocal(Integer id) {
        tipoLocalRepository.deleteById(id);
    }

}
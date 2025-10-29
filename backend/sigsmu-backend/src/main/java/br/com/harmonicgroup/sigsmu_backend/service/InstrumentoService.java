package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.InstrumentoRepository;



@Service
public class InstrumentoService {
    
    @Autowired
    InstrumentoRepository instrumentoRepository;

    public List<Instrumento> listarInstrumentos() {
        return instrumentoRepository.findAll();
    }

    public void cadastrarInstrumento(Instrumento instrumento) {
        instrumentoRepository.save(instrumento);
    }

    // public void atualizarInstrumento(UpdateDTO body, Integer id) {
    //     Instrumento atual = instrumentoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Instrumento não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     instrumentoRepository.save(atual);
    // }

    public void excluirInstrumento(Integer id) {
        instrumentoRepository.deleteById(id);
    }

}

package br.com.harmonicgroup.sigsmu_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.MarcaFabricante;


@Repository
public interface MarcaFabricanteRepository extends JpaRepository<MarcaFabricante, Integer> {}
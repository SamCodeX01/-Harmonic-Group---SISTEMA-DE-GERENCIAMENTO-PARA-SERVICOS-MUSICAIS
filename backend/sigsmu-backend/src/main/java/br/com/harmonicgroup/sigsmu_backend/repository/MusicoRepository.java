package br.com.harmonicgroup.sigsmu_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.Musico;


@Repository
public interface MusicoRepository extends JpaRepository<Musico, String> {}
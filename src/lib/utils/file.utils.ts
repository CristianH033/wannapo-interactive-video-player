function listVideoFiles(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;
    
    input.onchange = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      
      if (files) {
        const mp4Files = Array.from(files).filter(file => file.name.endsWith('.mp4'));
        
        console.log('Archivos MP4 encontrados:');
        mp4Files.forEach(file => console.log(file.name));
      }
    };
    
    input.click();
  }